const
    tags_data = {
        'arrow': ['head-arrows','arrows'],
        'menu': ['menu1', 'menu2'],
        'icon': [
            'v',
            'cross',
            'dots',
            'arrows',
            'plus',
            'minus',
            'menu1',
            'menu2',
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
            'net',
            'wifi',
            'open-file',
            'read',
            'build',
            'music',
            'puzzel'
        ]
    },
    
    tags = Object.keys( tags_data ),

    icons_data = tags_data['icon'].map(function(ic) {
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
        actions.innerHTML = `<h2>${icon.name}</h2>`;
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
            setTimeout(()=>{ 
                dialog.setAttribute('style', 'opacity:1');},100);
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
    },
    
    iconsView = {},
    update = function( icons_names ){
        let ic;
        Object.keys(iconsView).forEach(function(view_name){
            
            const classes = iconsView[view_name].classList;

            if( !icons_names.has(view_name) ) {

                classes.add('hide');

            } else if(classes.contains('hide')){

                classes.remove('hide');
            }
        });
    },
    search = function(text) {
        
        let result, set
            text = text || 'icon';
        ;

        result = tags
        .filter( 
            function(tag) { 
                return tag.toLowerCase().includes(text); 
        })
        .map( 
            function(tag) {
                return tags_data[tag];
        });

        result.push(
            tags_data['icon'].filter(
                function(icon) {
                    return icon.toLowerCase().includes(text);        
                }
            ));

        const icons = result.reduce(
                function(arr1, arr2){
                    return arr1.concat(arr2);
        }, []);

        set = new Set(icons);

        if (set.size > 0 ) {
            update(set);
        }
        
        return set;
    },
    start = function() {
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

            // init icons view for later use
            iconsView[icon.name] = div;

            gallery.appendChild(div);

        });
}
