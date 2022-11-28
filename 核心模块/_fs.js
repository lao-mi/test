const { log } = require("node:console");
const fs = require("node:fs/promises");
const path = require("node:path")

/*
  fs.readFile() 读取文件
  fs.appendFile() 创建新文件，或将数据添加到已有文件中
  fs.mkdir() 创建目录
  fs.rmdir() 删除目录
  fs.rm() 删除文件
  fs.rename() 重命名
  fs.copyFile() 复制文件
 */

// 错误操作 创建或者添加第二个值不能是路径

// fs.appendFile(path.resolve(__dirname,'a.jpg'),
//   'D:\\Users\\Desktop\\图片\\四谎？.jpg')
//   .then(r=>{
//     console.log(r);
//   })
//   .catch(err=>{
//     console.log('出错了~');
//   })


// fs.readFile('D:\\Users\\Desktop\\图片\\四谎？.jpg')
//   .then(buffer=>
//     fs.appendFile(path.resolve(__dirname,'a.jpg'),buffer)
//   )
//   .then(r=>{
//     console.log('成功');
//   })
//   .catch(err=>{
//     console.log('失败');
//   })

// fs.mkdir(path.resolve(__dirname,"./hello/abc"),{ recursive: true})
//   .then(r=>{
//    console.log('添加成功');
//   })
//   .catch(err=>{
//     console.log('添加失败');
//   });

// fs.rmdir(path.resolve(__dirname,"./hello"))
//   .then(r=>{
//     console.log('删除成功'); 
//   })
//   .catch(err=>{
//     console.log('删除失败');
//   })

// 复制或者移动文件夹时会失败

// fs.rename(
//   path.resolve(__dirname,"./a.jpg"),
//   path.resolve(__dirname,"../a.jpg"))
//   .then(r=>{
//     console.log('重命名成功');
//   })
//   .catch(r=>{
//     console.log('重命名失败');
//   })

fs.copyFile(
  path.resolve(__dirname,'../a.jpg'),
  path.resolve(__dirname,'./a.jpg')
).then(r=>{
  console.log('复制成功');
}).catch(r=>{
  console.log('复制失败');
})