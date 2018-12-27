
window.onload = function(){

    let count = 0;

    function create_right_slide(img_src, note){
        var slide = document.createElement('div');

        var border_div = document.createElement('div');
        border_div.className = 'border-crop';

        var img = document.createElement('img');
        img.src=img_src

        var msg_container= document.createElement('div')
        msg_container.className = 'right-msg';

        var msg = document.createElement('h1');
        msg.innerHTML = note;

        //append msg and img
        msg_container.appendChild(msg);
        border_div.appendChild(img);

        //append both to slide
        slide.append(border_div);
        slide.append(msg_container);

        return slide;

    }

    function insert_slide(){

        let imgs = [
            "https://scontent.fewr1-4.fna.fbcdn.net/v/t1.0-9/31230427_10156573659213311_4224802906366279680_n.jpg?_nc_cat=109&_nc_ht=scontent.fewr1-4.fna&oh=e6baef776053bbdec0c8cd775469bed3&oe=5CD0D783",
            "https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-9/31602855_10156600901948311_2325310863310848000_n.jpg?_nc_cat=105&_nc_ht=scontent.fewr1-2.fna&oh=4d8a3f78900ed5e7bd8212c50aa23889&oe=5CD2EE1E",
            "https://scontent.fewr1-1.fna.fbcdn.net/v/t1.0-9/26733999_10156178259048311_7721321596010589094_n.jpg?_nc_cat=108&_nc_ht=scontent.fewr1-1.fna&oh=ed705880eca6e9dc1018645916b6f69f&oe=5C8B4118",
            "https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-9/45487263_10157100396783311_4107988699382284288_n.jpg?_nc_cat=106&_nc_ht=scontent.fewr1-2.fna&oh=32f9c268983e9da3959f8a0f266344f1&oe=5C92BE10",
        ]
        let msgs = ["first met you,", "you were plump :)", "my other half", "ll REAL BAD 💩"];

        let cur_slide = create_right_slide(imgs[count], msgs[count]);

        let slide_show = document.getElementById("slide-show");
        slide_show.appendChild(cur_slide);

        count++;
    }


    let screen = document.getElementById("body");
    screen.onclick = function(){
        if(count < 4)
            insert_slide();
    }
}


