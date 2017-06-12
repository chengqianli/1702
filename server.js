var net=require('net')
var clientServer=new net.createServer()
//创建需要在服务器上通信的对象
var clientMap=new Object;
//创建流水账号-保证通信对象不重复
var i=0;

//建立连接
clientServer.on('connection',function(client){
	
	/*console.log('客户端启动，消息传来')*/
	
	client.name=++i;
	clientMap[client.name]=client
	
	client.on('data',function(data){
		console.log('客户端发来消息：'+data)
		
		
		huifu(data,client)
	})
	
	
})
function huifu(message,client){
	//client.write('消息已收到')
	for(var key in clientMap){
		clientMap[key].write(client.name+'说：'+message)
	}
}

clientServer.listen(9000)




/*
 var net=require('net')
 var clientServer=new net.createServer()
 var clientMap=new Object;
 var i=0;
 clientServer.on('connection',funciton(client){
 	console.log('客户端已启动，消息传来')
 	client.on('data',function(data){
 		console.log('客户端发来消息：'+data)
 		huifu(data,client)
 	})
 })
 function huifu(message,client){
 	client.write('消息已收到')
 }
 clientServer.listen(9000)
 */