//----------------------------------------------------------------------
// Tools
//----------------------------------------------------------------------

    function modal(toggle = true){
        toggle ? modalOn() : modalOff();
    }

    function modalOn(){

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

    $(document).ready(()=>{

        //----------------------------------------------------------------------
        // Fixing WhiteSpace in <code> tags
        //----------------------------------------------------------------------

            [].forEach.call(document.querySelectorAll('code'), ($code)=> {
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
            });

    });