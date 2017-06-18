var url = '/getList?n=';//请求的数据接口
var oUl = document.getElementById("list");
var page = document.getElementById("page");
var pageNum = document.getElementById("pageNum");
var pageInp = document.getElementById("pageInp");
var total=0;
var p = 1;
var reg = /^[0-9]+$/
init();
function init() {
    getData();
    bindEvent(pageInp,'change',function () {
        var v = this.value;
      if(reg.test(v)){
          if(v>total){
              this.value = total;
              v=total;
          }
          p = v;
          getData();
      }
    })
}



function getData() {
    ajax({
        url:url+p,
        success:bindDataFun
    })

}
function bindDataFun(result){
    //数据正常响应
    if(result.res=='0'){
        if(result.data && result.data.length>0){
            bindLi(result.data);
            total = result.total;
            bindPage(result.total)
        }
    }
    console.log(result)
}
//绑定li
function bindLi(arr){
    //innerHtml
    var str = '';
    for(var i=0;i<arr.length;i++){
        str +='<li>'
         for(var stu in arr[i]){
            if(arr[i].hasOwnProperty(stu)){
                str+='<span>  '
                if(stu =='sex'){
                    arr[i][stu] = arr[i][stu]==0?'男':'女';
                }
                str+=arr[i][stu];
                str+='</span>  '
            }
         }
        str +='</li>'
    }
    oUl.innerHTML = str;
}
//根据有多少页
function bindPage(total){
    var str = '';
    var bg = '';
   for(var i=1;i<=total;i++){
       if(i==p){
           bg='bg'
       }
       str +='<li class="'+bg+'">'
       str +=i;
       str +='</li>';
       bg='';

   }
   pageNum.innerHTML = str;
}
function bindEvent(id,eventType,fn){
    id.addEventListener(eventType,fn,false)
}
