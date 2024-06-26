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
                let modal = document.createElement('aside');
                modal.classList.add('modal', 'fadeIn');
                let close = document.createElement('i');
                close.setAttribute('title','Cerrar');
                close.classList.add('fas','fa-times-circle','close');
                modal.append(close);
                body.append(modal);
                
                modal.querySelector('.close').addEventListener('click', ()=>{
                    modalManager(false);
                });

                return modal;
            }else{
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
                            img.setAttribute('title',alt);
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

            if (lines[0] === ''){
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
                let cleaned = list[i].innerHTML;

                list[i].innerHTML = cleaned.trim()
            }
        }

//----------------------------------------------------------------------
// Listeners
//----------------------------------------------------------------------
    
    // --------------------------------------
    // | Index |
    // --------------------------------------

        function pageListenersIndex(){
            modalElementCreator();
            pCleaner();
        };

    // --------------------------------------
    // | HTML5 |
    // --------------------------------------

        function pageListenersHTML5(){
            //modalElementCreator();
            pCleaner();
        };

    // --------------------------------------
    // | CSS |
    // --------------------------------------

        function pageListenersCSS(){
            //modalElementCreator();
            pCleaner();
        };

    // --------------------------------------
    // | JavaScript |
    // --------------------------------------

        function ejemplo1(){
            let boton = document.getElementById('jsexp1');

            boton.addEventListener('click', ()=>{
                alert('Bienvenidos :D');
            });
        }

        function pageListenersJS(){

            const alert   = document.getElementById('alert');
            const confirm = document.getElementById('confirm');
            const reverse = document.getElementById('reverse');
            const evenGrp = document.querySelector('.play');

            alert.addEventListener('click',()=>{
                window.alert('Bienvenidos :D');
            });

            confirm.addEventListener('click',()=>{
                window.confirm('de veritas de veritas?');
            });

            reverse.addEventListener('click',()=>{
                evenGrp.classList.contains('reverse') ? evenGrp.classList.remove('reverse') : evenGrp.classList.add('reverse');
            });

            ejemplo1()

            pCleaner();
        };
    
    // --------------------------------------
    // | WebDev |
    // --------------------------------------

        function maxLength(e){
            let inp = e.currentTarget;
            let ctr = document.getElementById('counter-'+inp.id);
            let act = inp.value.length;
            ctr.innerText = act;
        }

        function counterCreator(elemList){
            for (let i = 0; i < elemList.length; i++){
                let count = document.createElement('sub');
                count.classList.add('counter-wrapper','my-2');
                count.innerHTML = '<p>Max:(</p><p id="counter-'+elemList[i].id+'">0</p><p>/'+elemList[i].getAttribute('maxlength')+')</p>';
                elemList[i].insertAdjacentElement('afterend',count);
            }
        }

        function formCheck(form){
            let input = form.querySelectorAll('input, select, textarea');
            let error = 0;

            for (let i = 0; i < input.length; i++) {
                if((input[i].value == '') || (input[i].value.length < 1)){
                    input[i].classList.add('is-invalid');
                    error++;
                }else{
                    input[i].classList.remove('is-invalid');
                }
            }

            if(error == 0){
                document.forms[form.id].submit();
                alert('Mensaje Enviado, Gracias','success',false);
            }else{
                alert('Formulario Incompleto','warning',false);
            }
        }

        function pageListenersWeb(){

            let maxL = main.querySelectorAll('.maxL');

            if(maxL){
                counterCreator(maxL);

                $(".maxL").on('input',(e)=>{
                    maxLength(e);
                });
            }

            $('#contactme').on('submit',(e)=>{
                e.preventDefault()
                formCheck(e.currentTarget);
            });
        };

//----------------------------------------------------------------------
// Global rules
//----------------------------------------------------------------------

    // --------------------------------------
    //  Nav Bar | screen width must match css
    // --------------------------------------

        function navBarToggling(mode){
            mode ? body.classList.add('toggled') : body.classList.remove('toggled');
        }

        aside.addEventListener('click',()=>{
            if(window.innerWidth <= 650){
                navBarToggling(!body.classList.contains('toggled'));
            }
        });

        main.addEventListener('click',()=>{
            if(window.innerWidth <= 650){
                navBarToggling(false)
            }
        });
    
    // --------------------------------------
    //  Code Format
    // --------------------------------------

        let codeList = document.querySelectorAll('code');

        if (codeList) {
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
        }