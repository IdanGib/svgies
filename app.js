const

    icons = [
        'cross',
        'horizontal-dots',
        'vertical-dots',
        'next-arrow',
        'plus'
    ],

    gallery = document.getElementById('gallery'),

    show_dialog = ( icon )=> {
        document.getElementById(icon).setAttribute('open', '');
    },

    close_dialog = ( icon )=> {
        document.getElementById(icon).removeAttribute('open');
    };

icons.forEach(( icon )=> {
    gallery.innerHTML += `
                    <div class="card">
                    <input type="image" src="svg/${ icon }.svg" alt="${ icon }" onclick="show_dialog( '${ icon }' )">
                    <dialog close id="${ icon }">
                        <img src="svg/${ icon }.svg" alt="${ icon }" width="256px" height="256px">
                        <input type="image" src="svg/cross.svg" onclick="close_dialog('${ icon }')"
                               style="width: 32px; height: 32px;position: absolute;top:-16px;right: -16px;background: #fff">
                    </dialog>
                </div>
    `;
})
