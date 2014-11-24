a={//API
  d:document,
  a:function(c,e){//append: content,element
    (a.d[e]||e).appendChild(c)},
  new:function(tg){
    return a.d.createElement(tg)},
  set:function(){
    a.d.readyState=='complete'?
      a.init()
      :(
      console.log(a.d.readyState),
      onload=a.init)},
  sty:function(dv,id){//set: division,unique id
    var s=a.new('style')
    return s.innerHTML='.'+dv+',.'+dv+'>button{background:#00F;border-radius:1em;color:#FFF;display:table;font-family:Segoe UI Symbol;font-size:2em}\n.'+dv+'>canvas{background:skyblue;height:98%;position:fixed;width:99%}.'+a.cn.inv+id+'{display:none}',s},
  url:function(b){//url from blob protocol
    return URL.createObjectURL(new Blob(['']))},
  init:function(s){//initiate
    var v,p=a.p=a.new('div'),c=a.cv=a.new('canvas'),b=a.bt=a.new('button'),u=a.url().split('-')
    b.innerHTML='&#127968;'//🏠
    u=u[u.length-1]
    p.innerHTML='&#24072;&#26080;&#24418;'//parsing characters
    /*Chinese Characters used:
    师 Shī: division
    无形 Wúxíng: invisible*/
    v=p.innerText//ok, gathering result
    a.cn={
      div:v[0],
      inv:v[1]+v[2]}
    p.innerHTML=''

    a.a(p,'body')
    a.a(c,p)//append canvas to div
    a.a(b,p)
    c.className=a.cn.inv+u
    a.a(a.sty(p.className=v[0]+u,a.uid=u),'head')//appending 绝 后 canvas style to head
    'end'}}
a.set()