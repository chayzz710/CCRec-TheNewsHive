document.addEventListener('DOMContentLoaded',function(){
    var blogTitle1= document.querySelector('#blog-title1 a');
    var blogTitle2= document.querySelector('#blog-title2 a');
    var blogTitle3= document.querySelector('#blog-title3 a');
    var blogTitle4= document.querySelector('#blog-title4 a');
    var blog1to4=[blogTitle1, blogTitle2,blogTitle3,blogTitle4];

    var content1=document.querySelector('#blog-title1 div:nth-child(2)');
    var content2=document.querySelector('#blog-title2 div:nth-child(2)');
    var content3=document.querySelector('#blog-title3 div:nth-child(2)');
    var content4=document.querySelector('#blog-title4 div:nth-child(2)');
    var content1to4=[content1,content2,content3,content4];

    var img1=document.querySelector('#icon1 img');
    var img2=document.querySelector('#icon2 img');
    var img3=document.querySelector('#icon3 img');
    var img4=document.querySelector('#icon4 img');
    var img1to4=[img1,img2,img3,img4];

    var date1= document.querySelector('#icon1 span');
    var date2= document.querySelector('#icon2 span');
    var date3= document.querySelector('#icon3 span');
    var date4= document.querySelector('#icon4 span');
    date1to4=[date1,date2,date3,date4];

    var tag1= document.querySelector('#icon1 .tabs div')
    var tag2= document.querySelector('#icon2 .tabs div')
    var tag3= document.querySelector('#icon3 .tabs div')
    var tag4= document.querySelector('#icon4 .tabs div')
    tag1to4=[tag1,tag2,tag3,tag4];

    var author1=document.querySelector('#icon1 .author-name')
    var author2=document.querySelector('#icon2 .author-name')
    var author3=document.querySelector('#icon3 .author-name')
    var author4=document.querySelector('#icon4 .author-name')
    var author1to4=[author1,author2,author3,author4];


    var tabloid1=document.querySelector('.tabloids-table :nth-child(1) .tabloid-title a')
    var tabloid2=document.querySelector('.tabloids-table :nth-child(2) .tabloid-title a')
    var tabloid3=document.querySelector('.tabloids-table :nth-child(3) .tabloid-title a')
    var tabloid4=document.querySelector('.tabloids-table :nth-child(4) .tabloid-title a')
    var tabloid5=document.querySelector('.tabloids-table :nth-child(5) .tabloid-title a')
    var tabloid6=document.querySelector('.tabloids-table :nth-child(6) .tabloid-title a')
    var tabloid1to4=[tabloid1,tabloid2,tabloid3,tabloid4, tabloid5, tabloid6];

    var tabimg1=document.querySelector('.tabloids-table :nth-child(1) img')
    var tabimg2=document.querySelector('.tabloids-table :nth-child(2) img')
    var tabimg3=document.querySelector('.tabloids-table :nth-child(3) img')
    var tabimg4=document.querySelector('.tabloids-table :nth-child(4) img')
    var tabimg5=document.querySelector('.tabloids-table :nth-child(5) img')
    var tabimg6=document.querySelector('.tabloids-table :nth-child(6) img')
    var tabimg1to4=[tabimg1, tabimg2, tabimg3, tabimg4,tabimg5,tabimg6];

    var tabDate1= document.querySelector('.tabloids-table :nth-child(1) span')
    var tabDate2= document.querySelector('.tabloids-table :nth-child(2) span')
    var tabDate3= document.querySelector('.tabloids-table :nth-child(3) span')
    var tabDate4= document.querySelector('.tabloids-table :nth-child(4) span')
    var tabDate5= document.querySelector('.tabloids-table :nth-child(5) span')
    var tabDate6= document.querySelector('.tabloids-table :nth-child(6) span')
    var tabDate1to4=[tabDate1,tabDate2,tabDate3,tabDate4,tabDate5,tabDate6];
    
    var content5=document.querySelector('.tabloids-table :nth-child(5) .tabloid-title div')
    var content6=document.querySelector('.tabloids-table :nth-child(6) .tabloid-title div')
    var content7=document.querySelector('.tabloids-table :nth-child(7) .tabloid-title div')
    var content8=document.querySelector('.tabloids-table :nth-child(8) .tabloid-title div')
    var content9=document.querySelector('.tabloids-table :nth-child(9) .tabloid-title div')
    var content10=document.querySelector('.tabloids-table :nth-child(10) .tabloid-title div')
    var content5to10=[content5, content6, content7, content8, content9, content10];

    fetch('https://coding-week-2024-api.onrender.com/api/data')
        .then(res => res.json())
        .then(data => {
                for(let i=0;i<4;i++){
                    blog1to4[i].innerHTML=data[i].headline;
                    img1to4[i].src=data[i].image;
                    date1to4[i].innerHTML=data[i].date;
                    tag1to4[i].innerHTML=data[i].type;
                    author1to4[i].innerHTML=data[i].author;
                    content1to4[i].innerHTML=data[i].content;
                }
                for(let i=0;i<6;i++){
                    tabloid1to4[i].innerHTML=data[i+4].headline;
                    tabimg1to4[i].src=data[i+4].image;
                    tabDate1to4[i].innerHTML=data[i+4].date;
                    content5to10[i].innerHTML=data[i+4].content;
                }
                
        })
        .catch(error=>console.error('Error fetching data:', error));
});

