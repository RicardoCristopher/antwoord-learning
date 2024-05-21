//----------------------------------------------------------------------
// Global Constants
//----------------------------------------------------------------------

    const body  = document.querySelector('body');
    const aside = document.querySelector('aside');
    const main  = document.querySelector('main');

//----------------------------------------------------------------------
// Tools
//----------------------------------------------------------------------

    // --------------------------------------
    //  Modal
    // --------------------------------------

        function modalManager(toggle = true){
            if(toggle){
                main.classList.add('lockdown');

                let modal = document.createElement('aside');
                modal.classList.add('modal', 'fadeIn');
                let close = document.createElement('i');
                close.classList.add('fas','fa-times-circle','close');
                modal.append(close);
                
                body.append(modal);
                modal.querySelector('.close').addEventListener('click', ()=>{
                    modalManager(false);
                });

                return modal;
            }else{
                main.classList.remove('lockdown');
                document.querySelector('.modal').remove();
            }
        }

        function modalElementCreator(){
            // ------------------------------------------
            // | IMG | data-: src, alt, class(opt)
            // ------------------------------------------

                $('.createImg').click((e)=>{
                    let btn = e.currentTarget;
                    let src = btn.getAttribute('data-src');
                    
                    if(src){
                        let alt = btn.getAttribute('data-alt');

                        if(alt){
                            let classes = btn.getAttribute('data-class');

                            let img = document.createElement('img');
                            img.setAttribute('src',src);
                            img.setAttribute('alt',alt);
                            img.classList.add('dinamus-img');
                            let place = modalManager();

                            if(classes.length > 0 ){
                                let classLi = classes.split(',');
                                img.classList.add(...classLi);
                                place.append(img);
                            }else{
                                place.append(img);
                            }
                        }
                    }
                });
        }

    // --------------------------------------
    //  Cleaner
    // --------------------------------------

        function codeCleaner($code){
            let lines = $code.textContent.split('\n');

            if (lines[0] === '')
            {
                lines.shift()
            }

            let matches;
            let indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null;

            if (!!indentation) {
                lines = lines.map((line)=> {
                    line = line.replace(indentation, '')
                    return line.replace(/\t/g, '    ')
                });
            }

            $code.textContent = lines.join('\n').trim();
        }

        function pCleaner(){
            let list = main.querySelectorAll('.data-text');

            for (let i = 0; i < list.length; i++) {
                let cleaned = list[i].textContent;

                list[i].textContent = cleaned.trim()
            }
        }

    // --------------------------------------
    //  Nav Bar
    // --------------------------------------

        aside.addEventListener('click',()=>{
            body.classList.add('toggled');
        });

        main.addEventListener('click',()=>{
            body.classList.remove('toggled');
        });

//----------------------------------------------------------------------
// Listeners
//----------------------------------------------------------------------
    
    function pageListenersIndex(){
        modalElementCreator();

        pCleaner();
    };

    function pageListenersJS(){

        const alert   = document.getElementById('alert');
        const confirm = document.getElementById('confirm');
        const reverse = document.getElementById('reverse');
        const evenGrp = document.querySelector('.play');

        alert.addEventListener('click',()=>{
            window.alert('Hola Mundo');
        });

        confirm.addEventListener('click',()=>{
            window.confirm('de veritas de veritas?');
        });

        reverse.addEventListener('click',()=>{
            evenGrp.classList.contains('reverse') ? evenGrp.classList.remove('reverse') : evenGrp.classList.add('reverse');
        });

        pCleaner();
    };

//----------------------------------------------------------------------
// Global rules
//----------------------------------------------------------------------

    let codeList = document.querySelectorAll('code');

    for (let i = 0; i < codeList.length; i++) {
        if((codeList[i].classList.contains('language-html')) || (codeList[i].classList.contains('lang-html'))){
            let codeX = codeList[i].nextElementSibling;

            if(codeX){
                let container  = document.createElement('script');
                container.type = 'text/plain';
                container.style.display = 'block';

                let code  = codeX.value;

                container.textContent = code;

                codeList[i].append(container);

                codeX.remove();
            }
        }

        codeCleaner(codeList[i]);
    }
