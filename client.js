var net=require('net')

var port=9000;

var host='127.0.0.1'

var client=new net.Socket()

client.setEnconding='utf-8';



client.connect(port,host,function(){
	client.write('你好')
})
client.on('data',function(data){
	console.log('服务器回复：'+data.toString())
	say()
})
var readline=require('readline')
//io通道
var r1=readline.createInterface({
	input:process.stdin,
	output:process.stdout
})
function say(){
	r1.question('请输入要发送的内容：',function(inputstr){
		//inputstr控制台输入内容
		if(inputstr!='bye'){
			client.write(inputstr)
		}else{
			client.destroy()
			r1.close()
		}
	})
}


/*
 * var net=require('net')
 * var port=9000;
 * var host='127.0.0.1'
 * var client=new net.Socket()
 * client.setEnconding='utf-8'
 * client.connect(port,host,function(){
 * 	client.write('你好')
 * })
 */