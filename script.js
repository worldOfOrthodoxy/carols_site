$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 20){

            $('nav').addClass('sticky');
        }else{

            $('nav').removeClass('sticky');
        }

        if (this.scrollY > 300) {

            $('.scroll-up-btn').addClass('show');
        }else{

            $('.scroll-up-btn').removeClass('show');
        }
    });

    $('.menu-btn').click(function(){
        $('nav .nav__list').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    })

});

/*const svcBtn = document.querySelector('.service__btn');

svcBtn.addEventListener('click', function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    // ripples.style.top = y + 'px';
    
    this.appendChild(ripples);
    
    setTimeout(() => {
        ripples.remove()
    },500);
});*/

const ap = new APlayer({

    container: document.getElementById('aplayer'),
    listFolded: true,
    theme: '#ff7300',
    listMaxHeight: 240,

    audio: [
    {
        name: 'Нічка та ясная',
        artist: 'Почаїв Лавра',
        url: 'music/kolyadka-nicka-ta-yasnaya.mp3',
        cover: 'https://єпархія.укр/wp-content/uploads/2018/01/DSC_0339.jpg'
    },
    {
        name: 'Дін-дон',
        artist: 'Почаїв лавра',
        url: 'music/kolyada-din-don.mp3',
        cover: 'https://openway.com.ua/uploaded_files/tour_photo/Pochaiv_zima.jpg.800x600_q85_box-0%2C6%2C650%2C494_crop_detail.jpg'
    },
    {
        name: 'На небі зірка',
        artist: 'Н_Нижанківський',
        url: 'music/na_nebi_zirka.mp3',
        cover: 'https://frankonews.if.ua/wp-content/uploads/2022/12/cnfh.jpg'
    },
    {
        name: '«Французская колядка»',
        artist: 'м Иулиании Денисовой',
        url: 'music/Franc_Carol.mp3',
        cover: 'https://static.ukrinform.com/photos/2017_12/thumb_files/630_360_1513939263-8518.jpg'
    },
    {
        name: 'Ерурем',
        artist: 'КДАіС',
        url: 'music/Leru_i_Ler.mp3',
        cover: 'https://images.1plus1.ua/uploads/articles/000/806/170/1a2a0baace23c740b88ce877655fd278_665x442.jpg'
    },
    {
        name: 'Mare_Prăznuire',
        artist: 'Corul_Arhieresc_al_Mănăstirii_Curchi',
        url: 'music/Mare_Praznuire.mp3',
        cover: 'https://dity.in.ua/sites/default/files/inline-images/13_main.jpg'
    },
    {
        name: 'Ми вашого двора не минаємо',
        artist: 'Святогірська лавра',
        url: 'music/mu_vachogo_dvora.mp3',
        cover: 'https://www.respecthotel.com.ua/wp-content/uploads/2019/01/339281_1.jpg'
    },
    {
        name: 'Рожество Христово днесь всі празднуем',
        artist: 'Почаїв лавра',
        url: 'music/6.mp3',
        cover: 'https://media.slovoidilo.ua/media/publications/18/171290/171290-1_large.jpg'
    },
    {
        name: '«Святий вечiр» ',
        artist: 'Молодіжний хор',
        url: 'music/Svat_Vechir.mp3',
        cover: 'https://apostrophe.ua/uploads/image/8034172549a9c709e155f0b00b4f11f9.jpg'
    },
    {
        name: '«Нова радость» ',  //9
        artist: 'Почаїв Лавра',
        url: 'music/novaradostNam.mp3',
        cover: 'https://pravlife.org/sites/default/files/field/image/2020.01.10/fest12.jpg'
    },
    {
        name: '«Дивная новина» ',  //10
        artist: 'Почаїв Лавра',
        url: 'music/DivnaNOVINA.mp3',
        cover: 'https://news.church.ua/files/2018/12/49346059_2339123952982407_2263978489805799424_n.jpg'
    },
    {
        name: '«Що то за предиво?» ',  //11  https://єпархія.укр/wp-content/uploads/2018/01/DSC_0339.jpg
        artist: 'Почаїв Лавра',
        url: 'music/cho.mp3',
        cover: 'https://palomnik.zp.ua/wp-content/uploads/2016/03/Recoverd_jpg_file6823-169x300.jpg'
    },
    {
        name: '«Добрий вечір люди» ',  //12
        artist: 'Почаїв Лавра',
        url: 'music/do.mp3',
        cover: 'https://i.ytimg.com/vi/aA6KlzX51Uo/maxresdefault.jpg'
    },
    {
        name: '«Воскликнули ангели всі» ',  //13
        artist: 'Почаїв Лавра',
        url: 'music/2.mp3',
        cover: 'https://i.ytimg.com/vi/aA6KlzX51Uo/maxresdefault.jpg'
    },
    {
        name: '«Небо і земля» ',  //14
        artist: 'Почаїв Лавра',
        url: 'music/hor-pochaevskoy-lavry-nebo-i-zemlya.mp3',
        cover: 'https://ukr.media/static/ba/aimg/2/4/8/248060_1.jpg'
    },
    {
        name: '«Колядка» ',  //15
        artist: 'Києво-Печерська Лавра',
        url: 'music/Molodyozhnyj_hor_Kievo_Pecherskoj_Lavry_Kolyadka_iPleer_com.mp3',
        cover: 'https://spzh.news/img/article/583/79_main.jpg'
    },
    {
        name: '«Тропар» ',  //16
        artist: 'Почаїв Лавра',
        url: 'music/89.mp3',
        cover: 'https://vz.ua/uploads/news/2022/01/05/a24dd52192f1b0d54539883e186eb6af294bf236.jpg'
    },


    ]
})

// aplayer click

$('.card').on('click', function(e){

    var dataSwitchId = $(this).attr('data-switch');

    ap.list.switch(dataSwitchId);

    ap.play();
    $('#aplayer').addClass('show');

    $('.scroll-up-btn').addClass('showTop');
});
$('.aplayer-icon.aplayer-icon-menu').click(function(){

    $('.scroll-up-btn').toggleClass('showTop')
});

var type = new Typed(".logo__text", {
    strings: ["Сайт колядок"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true 
});

const boxes = document.querySelectorAll('.box');
let width = window.screen.availWidth

boxes.forEach(box => {

    box.classList.remove('carousel-item');
    
    if (width <= 768) {
        
        box.classList.add('carousel-item');
        console.log(width);
    }
});