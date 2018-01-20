const

    icons = [
        {
            name:'v',
            isPresent: false
        },
        {
            name:'cross',
            isPresent: false
        },
        {
            name:'dots',
            isPresent: false
        },
        {
            name:'arrows',
            isPresent: false
        },
        {
            name:'plus',
            isPresent: false
        },
        {
            name:'minus',
            isPresent: false
        },
        {
            name:'menu',
            isPresent: false
        },
        {
            name:'head-arrows',
            isPresent: false
        },
        {
            name:'no-image',
            isPresent: false
        }
    ],

    gallery = document.getElementById('gallery'),
    details = document.getElementById('details'),

    close_dialog = ( icon)=> {
        details.querySelector('#' + icon.name).remove();
        icon.isPresent = false;

    },

    show_dialog = ( icon )=> {

        if( icon.isPresent ){
            return;
        }

        const
            dialog = document.createElement('div'),
            img = document.createElement('img'),
            input = document.createElement('input')
        ;

        dialog.setAttribute('id', `${ icon.name }`);
        dialog.classList.add('details-card');

        img.setAttribute('src', `svg/${ icon.name }.svg`);
        img.setAttribute('class', 'icon-img');


        input.setAttribute('type', 'image');
        input.setAttribute('src', 'svg/cross.svg');
        input.setAttribute('class', 'close-icon');


        input.addEventListener('click', ()=>{
            close_dialog( icon );
        });

        dialog.appendChild(img);
        dialog.appendChild(input);

        details.appendChild( dialog );

        icon.isPresent = true;

        (function () {
            setTimeout(()=>{dialog.setAttribute('style', 'opacity:1');},100);
        }());

    };

icons.forEach(( icon )=> {

    const
        div = document.createElement('div'),
        input =  document.createElement('input')
    ;

    input.setAttribute('type', 'image');
    input.setAttribute('src', `svg/${ icon.name }.svg`);
    input.addEventListener('click', ()=>{
        show_dialog( icon );
    });

    div.setAttribute('class', 'card');
    div.appendChild(input);


    gallery.appendChild(div);
})
