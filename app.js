const
    icons = [
        'v',
        'cross',
        'dots',
        'arrows',
        'plus',
        'minus',
        'menu',
        'head-arrows',
        'no-image',
        'map',
        'copy',
        'note',
        'phone',
        'search',
        'cloud',
        'settings',
        'upload',
        'download',
        'home',
        'voice',
        'net'
    ],

    icons_data = icons.map(function(ic) {
        return {
            name: ic,
            isPresent: false
        };
    }),

    app_data = { inStage: undefined },

    gallery = document.getElementById('gallery'),
    details = document.getElementById('details'),

    addActionsToDialog = function(dialog, icon) {
        const actions = document.createElement('div');
        actions.setAttribute('class', 'actions');
        dialog.appendChild( actions );
    },


    pushDailog = function(stage, icon) {

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

        addActionsToDialog( dialog, icon );

        stage.appendChild( dialog );

        icon.isPresent = true;

        (function () {
            setTimeout(()=>{ dialog.setAttribute('style', 'opacity:1');},100);
        }());
    },


    close_dialog = ( icon )=> {
        if ( icon ) {
            details.querySelector('#' + icon.name).remove();
            icon.isPresent = false;
            app_data.inStage = undefined;
        }
    },

    show_dialog = ( icon )=> {

        if( !icon.isPresent ) {
            close_dialog(app_data.inStage);
            pushDailog(details, icon);
            app_data.inStage = icon;
        }
    };

icons_data.forEach(( icon )=> {

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
