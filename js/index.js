"use strict";

var shopSort = (function(){
    //get dom noedes
    var oList = document.querySelector("#list");
    var oLink = document.querySelectorAll("#header>a");

    //ajax获取数据的信息
    function ajaxGetDatas(){
        var xhr = new XMLHttpRequest();
        xhr.open("get", "json/product.json", true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                var results = utils.toJSON(xhr.responseText);
                //绑定数据
                bindDatas(results);
            }
        }
        xhr.send(null);
    };

    //绑定数据的信息
    function bindDatas(datas){
        var str = "";
        for(var i=0; i<datas.length; i++){
            var cur = datas[i];
            str += `<li data-price="${cur.price}" data-hot="${cur.hot}" data-time="${cur.time}">
                        <a href="javascript:;">
                            <img src="${cur.img}" alt="">
                            <p>${cur.title}</p>
                            <span>￥${cur.price}</span>
                        </a>
                     </li>`;
        }
        oList.innerHTML = str;
        sortPrice();  //排序
    };

    //按照价格的升序排序
    function sortPrice(){
        for(var i=0; i<oLink.length; i++){
            oLink[i].index = i;
            oLink[i].switchs = -1;
            oLink[i].onclick = function(){
              this.switchs *= -1;
              sortDetail.call(this);
            };
        }
    };

    //具体的排序逻辑
    function sortDetail(){
        //点击当前的a，让其他的两个a回归初始值
        for(var k=0; k<oLink.length; k++){
            if(k!==this.index){
                oLink[k].switchs = -1;
            }
        }
        var oAlls = document.querySelectorAll("#list>li");
        var oAlli = document.querySelectorAll("#header i");
        for(var i=0; i<oAlli.length; i++){
            oAlli[i].classList.remove("active-up");
            oAlli[i].classList.remove("active-down");
        }
        var ary   = utils.toArray(oAlls);
        var _this = this;
        var ois   = _this.querySelectorAll("i");
        if(this.switchs==1){
            ois[0].classList.add("active-up");
        }else{
            ois[1].classList.add("active-down");
        }
        var arrs = ['time','price','hot'];
        var attr = arrs[this.index];
        ary.sort(function(a, b){
            var curInfos  = a.dataset[attr];
            var nextInfos = b.dataset[attr];
            if(attr == 'time'){
                curInfos = curInfos.replace(/-/g, "");
                nextInfos= nextInfos.replace(/-/g, "");
            }
            return (curInfos-nextInfos)*_this.switchs;
        });
        for(var i=0; i<ary.length; i++){
            oList.appendChild(ary[i]);
        }
    };

    return {
        init: function(){
            ajaxGetDatas();  //ajax获取数据信息以及绑定数据信息
        }
    }
})();
shopSort.init();






































































