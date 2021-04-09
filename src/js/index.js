//热卖推荐
$.ajax({
    url:'json/index.json',
    type:'get',
    dataType:'json',
    success:function(result){
        $.each(result.hotValue, function (index, value) { //index是循环的序数
            var hotValue = result.hotValue[index].value;
            var hotImg = result.hotValue[index].img;
            var hotTextName  = result.hotTextValue[index].name;
            var hotTextName2 = result.hotTextValue2[index].name;
            var hotTextName3 = result.hotTextValue3[index].name;
            var hotTextName4 = result.hotTextValue4[index].name;
            var hotTextName5 = result.hotTextValue5[index].name;
            var hotTextValue2 = result.hotTextValue2[index].value;
        
             $(`
             <li><span>
             <a href="${hotValue}"><img src="${hotImg}" alt=""></a>
             <b>${hotTextName}</b>
             <a href="${hotTextValue2}">${hotTextName2}</a>
             <p>${hotTextName3}<b>${hotTextName4}</b></p>
             <p>${hotTextName5}</p>
             <a href="../dist/pages/shoplist.html">立即抢购</a>
          </span></li>
             `).appendTo("#hotImg");
        });
    },
    // error: function (errorMsg) {
    //     //请求失败时执行该函数
    //     alert("请求数据失败!");
    // }
})

//左导航栏
$.ajax({
    url:'json/index.json',
    type:'get',
    dataType:'json',
    success:function(result){
        // 第一个
        $.each(result.leftnav11, function (index, value) { //index是循环的序数
            var leftName1 = result.leftnav11[index].name;
            var leftValue1 = result.leftnav11[index].value;
            $(`
            <li><a href="${leftValue1}">${leftName1}</a></li>
            `).appendTo(".col-1 .inner1");
        });
        $.each(result.leftnav12, function (index, value) { //index是循环的序数
            var leftName2 = result.leftnav12[index].name;
            var leftValue2 = result.leftnav12[index].value;
            $(`
            <li><a href="${leftValue2}">${leftName2}</a></li>
            `).appendTo(".col-1 .inner2");
        });
        $.each(result.leftnav13, function (index, value) { //index是循环的序数
            var leftName3 = result.leftnav13[index].name;
            var leftValue3 = result.leftnav13[index].value;
            $(`
            <li><a href="${leftValue3}">${leftName3}</a></li>
            `).appendTo(".col-1 .inner3");
        });

        // 第二个
        $.each(result.leftnav31, function (index, value) { //index是循环的序数
            var leftName1 = result.leftnav31[index].name;
            var leftValue1 = result.leftnav31[index].value;
            $(`
            <li><a href="${leftValue1}">${leftName1}</a></li>
            `).appendTo(".col-2 .inner1");
        });
        $.each(result.leftnav32, function (index, value) { //index是循环的序数
            var leftName2 = result.leftnav32[index].name;
            var leftValue2 = result.leftnav32[index].value;
            $(`
            <li><a href="${leftValue2}">${leftName2}</a></li>
            `).appendTo(".col-2 .inner2");
        });
        $.each(result.leftnav33, function (index, value) { //index是循环的序数
            var leftName3 = result.leftnav33[index].name;
            var leftValue3 = result.leftnav33[index].value;
            $(`
            <li><a href="${leftValue3}">${leftName3}</a></li>
            `).appendTo(".col-2 .inner3");
        });

        // 第三个
        $.each(result.leftnav31, function (index, value) { //index是循环的序数
            var leftName1 = result.leftnav31[index].name;
            var leftValue1 = result.leftnav31[index].value;
             $(`
               <li><a href="${leftValue1}">${leftName1}</a></li>
             `).appendTo(".col-3 .inner1");
        });
        $.each(result.leftnav32, function (index, value) { //index是循环的序数
            var leftName2 = result.leftnav32[index].name;
            var leftValue2 = result.leftnav32[index].value;
             $(`
               <li><a href="${leftValue2}">${leftName2}</a></li>
             `).appendTo(".col-3 .inner2");
        });
        $.each(result.leftnav33, function (index, value) { //index是循环的序数
            var leftName3 = result.leftnav33[index].name;
            var leftValue3 = result.leftnav33[index].value;
             $(`
               <li><a href="${leftValue3}">${leftName3}</a></li>
             `).appendTo(".col-3 .inner3");
        });
        // 第四个
        $.each(result.leftnav31, function (index, value) { //index是循环的序数
            var leftName1 = result.leftnav31[index].name;
            var leftValue1 = result.leftnav31[index].value;
            $(`
            <li><a href="${leftValue1}">${leftName1}</a></li>
            `).appendTo(".col-4 .inner1");
        });
        $.each(result.leftnav32, function (index, value) { //index是循环的序数
            var leftName2 = result.leftnav32[index].name;
            var leftValue2 = result.leftnav32[index].value;
            $(`
            <li><a href="${leftValue2}">${leftName2}</a></li>
            `).appendTo(".col-4 .inner2");
        });
        $.each(result.leftnav33, function (index, value) { //index是循环的序数
            var leftName3 = result.leftnav33[index].name;
            var leftValue3 = result.leftnav33[index].value;
            $(`
            <li><a href="${leftValue3}">${leftName3}</a></li>
            `).appendTo(".col-4 .inner3");
        });

        // 第五个
        $.each(result.leftnav31, function (index, value) { //index是循环的序数
            var leftName1 = result.leftnav31[index].name;
            var leftValue1 = result.leftnav31[index].value;
            $(`
            <li><a href="${leftValue1}">${leftName1}</a></li>
            `).appendTo(".col-5 .inner1");
        });
        $.each(result.leftnav32, function (index, value) { //index是循环的序数
            var leftName2 = result.leftnav32[index].name;
            var leftValue2 = result.leftnav32[index].value;
            $(`
            <li><a href="${leftValue2}">${leftName2}</a></li>
            `).appendTo(".col-5 .inner2");
        });
        $.each(result.leftnav33, function (index, value) { //index是循环的序数
            var leftName3 = result.leftnav33[index].name;
            var leftValue3 = result.leftnav33[index].value;
            $(`
            <li><a href="${leftValue3}">${leftName3}</a></li>
            `).appendTo(".col-5 .inner3");
        });
    }
})

//最底下活动
$.ajax({
    url:'json/index.json',
    type:'get',
    dataType:'json',
    success:function(result){
        $.each(result.botactvalue, function (index, value) { //index是循环的序数
            var botactimg = result.botactvalue[index].img;
            var botactvalue = result.botactvalue[index].value;
            // var leftName2 = result.leftnav32[index].name;
            // var leftValue2 = result.leftnav32[index].value;
            // var leftName3 = result.leftnav33[index].name;
            // var leftValue3 = result.leftnav33[index].value;
             $(`
             <li>
                <a href="${botactvalue}"><img src="${botactimg}" alt=""></a>
             </li>  
            `).appendTo(".btact");
        });
    }
})
