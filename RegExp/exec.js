var text='mom and dad and baby';
var patten=/mom( and dad( and baby)?)?/gi;
var match=patten.exec(text);
console.log(match.index);  
console.log(match.input); 
console.log(match);  
//console.log(match[1]);  
//console.log(match[2]); 
var matches=text.match(patten);
console.log(matches);

var string='hello world';
console.log(string.slice(-3));  //'rld',��ֵ�����ַ�������
console.log(string.substring(-3)); //'hello world',���и�ֵȫ��תΪ0
console.log(string.substr(-3));   //'rld' ,��һ�������������ַ������ȣ��ڶ�������ת��Ϊ0
console.log(string.slice(3, -4));    //"lo w"
console.log(string.substring(3, -4));    //"hel"
console.log(string.substr(3, -4));         //""�����ַ�����

var string='   hello world    ';
console.log(string.trim());  //��hello world��


var text='cat,bat,sat,fat';
var p=/.at/;  
var matches=text.match(p);
var execs=p.exec(text);
console.log(matches); 
console.log(execs);
//alert(matches[0]);  //cat
//alert(matches.lastIndex); //0