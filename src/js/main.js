//----------------------------------------------------------------------
// Tools
//----------------------------------------------------------------------

    function modal(toggle = true){
        toggle ? modalOn() : modalOff();
    }

    function modalOn(){

    }

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

//----------------------------------------------------------------------
// Listeners
//----------------------------------------------------------------------

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
