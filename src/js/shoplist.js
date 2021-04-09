$.ajax({
    url:'../../dist/json/shoplist.json',
    type:'get',
    dataType:'json',
    success:function(result){
        $.each(result.leftLtValue, function (index, value) { //index是循环的序数
            var leftLtImg = result.leftLtValue[index].img;
            var leftLtValue = result.leftLtValue[index].value;
            var leftLtId = result.leftLtValue[index].id;
            var leftLtQ = result.leftLtValue[index].Qmoney;
            var leftLtWX = result.leftLtValue[index].WXmoney;
             $(`
             <div class="hor">
                <div class="comico">${leftLtId}</div>
                    <div class="djimg">
                        <img src="${leftLtImg}">
                    </div>
                    <div class="djinfo">
                        <p class="djname">${leftLtValue}</p>
                        <p class="djprice">Q币价：${leftLtQ} Q币</p>
                        <p class="djcpri" style="font-size:12px;">微信价：
                            <strong>￥${leftLtWX} </strong>
                        </p>
                    </div> 
                </div>
            `).appendTo("#hotlv");
        });
    }
})



$.ajax({
    url:'../../dist/json/shoplist.json',
    type:'get',
    dataType:'json',
    success:function(result){
        $.each(result.listlvValue, function (index, value) { //index是循环的序数
            var listlvImg = result.listlvValue[index].img;
            var listlvValue = result.listlvValue[index].value;
            var listlvQ = result.listlvValue[index].Qmoney;
            var listlvWX = result.listlvValue[index].WXmoney;
            var listhf = result.listlvValue[index].href;
             $(`
                <dl>
                    <dt>
                        <a href="#" target="_blank">
                            <img src="${listlvImg}" alt="太空律动 “闪耀灯球” 拉克丝">
                        </a>
                    </dt>
                    <dd>
                        <a href="#" class="djname" target="_blank">
                            <strong>${listlvValue}</strong></a>
                        <div class="bxlist-t1">
                            Q币价：<span class="t2">&nbsp;&nbsp;&nbsp;</span>
                            <span class="t2 fwb">${listlvQ}</span><span class="t2 fwb"> Q币</span>
                        </div>
                        <div class="bxlist-t1">
                            微信价：<span class="t2">&nbsp;&nbsp;&nbsp;￥${listlvWX}</span>
                        </div>
                        <div class="bxlist-t2">
                            <a href="${listhf}" class="buy-now" title="立即购买">
                                立即购买</a>
                        </div>
                        <span class=""></span>
                    </dd>
                </dl>
            `).appendTo(".listshops ");
        });
    }
})


function Page(_ref) {
    var pageSize = _ref.pageSize,
        pageTotal = _ref.pageTotal,
        curPage = _ref.curPage,
        id = _ref.id,
        getPage = _ref.getPage,
        showPageTotalFlag = _ref.showPageTotalFlag,
        showSkipInputFlag = _ref.showSkipInputFlag,
        pageAmount = _ref.pageAmount,
        dataTotal = _ref.dataTotal;
    if(!pageSize){
        pageSize = 0
    };
    if(!pageSize){
        pageSize = 0
    };
    if(!pageTotal){
        pageTotal = 0
    };
    if(!pageAmount){
        pageAmount = 0
    };
    if(!dataTotal){
        dataTotal = 0
    };
    this.pageSize = pageSize || 5; //分页个数
    this.pageTotal = pageTotal; //总共多少页
    this.pageAmount = pageAmount; //每页多少条
    this.dataTotal = dataTotal; //总共多少数据
    this.curPage = curPage || 1; //初始页码
    this.ul = document.createElement('ul');
    this.id = id;
    this.getPage = getPage;
    this.showPageTotalFlag = showPageTotalFlag || false; //是否显示数据统计
    this.showSkipInputFlag = showSkipInputFlag || false; //是否支持跳转
    if(dataTotal >0 &&pageTotal>0){
        this.init();
    }else{
        console.error("总页数或者总数据参数不对")
    }
};

// 给实例对象添加公共属性和方法
Page.prototype = {
    init: function init() {
        var pagination = document.getElementById(this.id);
        pagination.innerHTML = '';
        this.ul.innerHTML = '';
        pagination.appendChild(this.ul);
        var that = this;
        //首页
        that.firstPage();
        //上一页
        that.lastPage();
        //分页
        that.getPages().forEach(function (item) {
            var li = document.createElement('li');
            if (item == that.curPage) {
                li.className = 'active';
            } else {
                li.onclick = function () {
                    that.curPage = parseInt(this.innerHTML);
                    that.init();
                    that.getPage(that.curPage);
                };
            }
            li.innerHTML = item;
            that.ul.appendChild(li);
        });
        //下一页
        that.nextPage();
        //尾页
        that.finalPage();

        //是否支持跳转
        if (that.showSkipInputFlag) {
            that.showSkipInput();
        }
        //是否显示总页数,每页个数,数据
        if (that.showPageTotalFlag) {
            that.showPageTotal();
        }
    },
    //首页
    firstPage: function firstPage() {
        var that = this;
        var li = document.createElement('li');
        li.innerHTML = '首页';
        this.ul.appendChild(li);
        li.onclick = function () {
            var val = parseInt(1);
            that.curPage = val;
            that.getPage(that.curPage);
            that.init();
        };
    },
    //上一页
    lastPage: function lastPage() {
        var that = this;
        var li = document.createElement('li');
        li.innerHTML = '<';
        if (parseInt(that.curPage) > 1) {
            li.onclick = function () {
                that.curPage = parseInt(that.curPage) - 1;
                that.init();
                that.getPage(that.curPage);
            };
        } else {
            li.className = 'disabled';
        }
        this.ul.appendChild(li);
    },
    //分页
    getPages: function getPages() {
        var pag = [];
        if (this.curPage <= this.pageTotal) {
            if (this.curPage < this.pageSize) {
                //当前页数小于显示条数
                var i = Math.min(this.pageSize, this.pageTotal);
                while (i) {
                    pag.unshift(i--);
                }
            } else {
                //当前页数大于显示条数
                var middle = this.curPage - Math.floor(this.pageSize / 2),
                    //从哪里开始
                    i = this.pageSize;
                if (middle > this.pageTotal - this.pageSize) {
                    middle = this.pageTotal - this.pageSize + 1;
                }
                while (i--) {
                    pag.push(middle++);
                }
            }
        } else {
            console.error('当前页数不能大于总页数');
        }
        if (!this.pageSize) {
            console.error('显示页数不能为空或者0');
        }
        return pag;
    },
    //下一页
    nextPage: function nextPage() {
        var that = this;
        var li = document.createElement('li');
        li.innerHTML = '>';
        if (parseInt(that.curPage) < parseInt(that.pageTotal)) {
            li.onclick = function () {
                that.curPage = parseInt(that.curPage) + 1;
                that.init();
                that.getPage(that.curPage);
            };
        } else {
            li.className = 'disabled';
        }
        this.ul.appendChild(li);
    },
    //尾页
    finalPage: function finalPage() {
        var that = this;
        var li = document.createElement('li');
        li.innerHTML = '尾页';
        this.ul.appendChild(li);
        li.onclick = function () {
            var yyfinalPage = that.pageTotal;
            var val = parseInt(yyfinalPage);
            that.curPage = val;
            that.getPage(that.curPage);
            that.init();
        };
    },
    //是否支持跳转
    showSkipInput: function showSkipInput() {
        var that = this;
        var li = document.createElement('li');
        li.className = 'totalPage';
        var span1 = document.createElement('span');
        span1.innerHTML = '跳转到';
        li.appendChild(span1);
        var input = document.createElement('input');
        input.setAttribute("type","number");
        input.onkeydown = function (e) {
            var oEvent = e || event;
            if (oEvent.keyCode == '13') {
                var val = parseInt(oEvent.target.value);
                if (typeof val === 'number' && val <= that.pageTotal && val>0) {
                    that.curPage = val;
                    that.getPage(that.curPage);
                }else{
                    alert("请输入正确的页数 !")
                }
                that.init();
            }
        };
        li.appendChild(input);
        var span2 = document.createElement('span');
        span2.innerHTML = '页';
        li.appendChild(span2);
        this.ul.appendChild(li);
    },
    //是否显示总页数,每页个数,数据
    showPageTotal: function showPageTotal() {
        var that = this;
        //var li = document.createElement('li');
        // li.innerHTML = '共&nbsp' + that.pageTotal + '&nbsp页';
        // li.className = 'totalPage';
        //this.ul.appendChild(li);
        //var li2 = document.createElement('li');
        // li2.innerHTML = '每页&nbsp' + that.pageAmount + '&nbsp条';
        // li2.className = 'totalPage';
        //this.ul.appendChild(li2);
        var li3 = document.createElement('li');
        // li3.innerHTML = '合计&nbsp' + that.dataTotal + '&nbsp条数据';
        // li3.className = 'totalPage';
        //this.ul.appendChild(li3);
    }
};

window.onload = function () {
    new Page({
        id: 'pagination',
        pageTotal: 50, //必填,总页数
        pageAmount: 10,  //每页多少条
        dataTotal: 500, //总共多少条数据
        curPage:1, //初始页码,不填默认为1
        pageSize: 5, //分页个数,不填默认为5
        showPageTotalFlag:true, //是否显示数据统计,不填默认不显示
        showSkipInputFlag:true, //是否支持跳转,不填默认不显示
        getPage: function (page) {
            //获取当前页数
           console.log(page);
        }
    })

    //如有问题可联系VX(base64): REo5ODc4OQ==
}