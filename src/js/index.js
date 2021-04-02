// 平行导航栏
$.ajax({
    url: 'json/index.json',
    type: 'get',
    dataType: 'json',
    success: function (data) {
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        //$("#list").html('');

        $.each(data.nav, function (index, value) { //index是循环的序数
            var name = data.nav[index].name;
            var value = data.nav[index].value;
            //console.log(this.value);
            $("#list").html($("#list").html() + `<a href=` + `${this.value}` + `>` + this.name + "</a>");
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
    success:function(data){
        $.each(data.leftNav, function (index, value) { //index是循环的序数
            var name = data.leftNav[index].name;
            var value = data.leftNav[index].value;
           // console.log(this.value);
            $("#left-list").html($("#left-list").html() + `<a href=` + `${this.value}` + `>` + this.name + "</a>");
        });
    },
    // error: function (errorMsg) {
    //     //请求失败时执行该函数
    //     alert("请求数据失败!");
    // }
})
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
             <a href="">立即抢购</a>
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
        $.each(result.leftnav31, function (index, value) { //index是循环的序数
            var leftName1 = result.leftnav31[index].name;
            var leftValue1 = result.leftnav31[index].value;
            // var leftName2 = result.leftnav32[index].name;
            // var leftValue2 = result.leftnav32[index].value;
            // var leftName3 = result.leftnav33[index].name;
            // var leftValue3 = result.leftnav33[index].value;
             $(`
                 <a title="${leftName1}" href="${leftValue1}">${leftName1}</a>
             `).appendTo(".dev");
        });
    },
    // success:function(result2){
    //     $.each(result2.leftnav32, function (index, value) { //index是循环的序数
    //         var leftName2 = result2.leftnav32[index].name;
    //         var leftValue2 = result2.leftnav32[index].value;
    //          $(`
    //              <a title="${leftName2}" href="${leftValue2}">${leftName2}</a>
    //          `)
    //     });
    // }
})



