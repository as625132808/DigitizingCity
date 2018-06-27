/**
 * 下载excel
 * @param data 数据 格式 {header：{},body:[]} header：表头 body是表中字段数据
 *@param tableTitle 表格标题 不用标题设置为null

 * @param fileName 导出文件名
 * @param style 表格样式 格式{color:'',fillColor:'',border:{style:'dashed',color:'000000'}
   * border (可选参数) excel 边框样式 格式{style:'dashed',color:'000000'} style border样式 （none无边框，dotted ：点状边框。
   * dashed ：虚线。thin 	实线。double:双线。) color 颜色值为十六进制值的颜色（比如 ff0000）
   * tip (可选参数) 提示样式  title（可选参数）标题样式 ，header:（可选参数）表头样式
   *
   * color(可选参数，默认为黑色)  字体颜色 格式{color：'000000'}颜色值为十六进制值的颜色（比如 ff0000）
   * fillColor (可选参数，默认为白色)
   *
   */
 import xlsxs from 'better-xlsx' ;
 import XLSX from 'xlsx';
require("script-loader!file-saver");
require("script-loader!assets/js/Blob");
export function formatData2(data,fileName,style){
  const wopts = { bookType: 'xlsx', bookSST: true, type: 'binary' };
  let tip=data.tip;
  let body=data.body;
  let header=data.header;
  let title=data.title;
  let ass_data=data.ass_data||[];
  let tmpdata={}
  let rowIndex=0;
  if(tip!=null){
    let index=tmpdata.length;
    let code=String.fromCharCode(65)+(1+rowIndex);

  tmpdata[code]={"v":tip.field_name,h:{height:'200px'}}
  tmpdata["!merges"]=[{ s: { c: 0, r: rowIndex }, e: { c: header.length-1, r: rowIndex } }]
    rowIndex++
  }


  if(title!=null){
    let index=tmpdata.length;
    let code=String.fromCharCode(65)+(1+rowIndex);
    tmpdata["!merges"].push({ s: { c: 0, r: rowIndex }, e: { c: header.length-1, r: rowIndex }})
   tmpdata[code]={};
    tmpdata[code]={"v":title.field_name,s: { alignment: {horizontal: "center" ,vertical: "center"}}}

    rowIndex++;
  }
  if(header.length>0){
    for(let i=0;i<header.length;i++){
      let index=tmpdata.length;
      let code=String.fromCharCode(65+i)+(1+rowIndex);
      tmpdata[code]={"v":header[i].field_name}
    }
    rowIndex++;
  }
  if(body!=undefined&&body.length>0){
    for(let i=0;i<body.length;i++){
      for(let j=0;j<header.length;j++){
        let code=String.fromCharCode(65+j)+(1+rowIndex);
        let val;
        if(header[j].association_type==1){
         val= stringJoin(ass_data[header[j].field],body[i][header[j].map_field],header[j].association_field,header[j].association_parent_field,null)
        }else if(header[j].association_type==2){
          val= stringReplace(ass_data[header[j].field],body[i][header[j].field],header[j].association_field,header[j].association_parent_field,body[i][header[j].field])
        }else  if(header[j].association_type==3){
         val=body[i][header[j].field]
        }else{
           val=body[i][header[j].field]
        }
        if(!val){
          val='';
        }
        tmpdata[code]={"v":val}
      }
      rowIndex++;
    }
  }
  tmpdata["!cols"]=[{wpx: 267}]
//      tmpdata["s"]={
//        "!row" : [{hpx: 367}]
//      }
    tmpdata['!rows'] =[
      {hpx: 312}, // "points"
]
  var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
  var tmpWB = { SheetNames: ['mySheet'], //保存的表标题
    Sheets: { 'mySheet': Object.assign({}, tmpdata, //内容
      { '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
      }) } };
  var  tmpDown = new Blob([s2ab(XLSX.write(tmpWB, { bookType:  'xlsx' , bookSST: false, type: 'binary' }//这里的数据是用来定义导出的格式类型
  ))], { type: "" });

  saveAs(tmpDown,fileName);
}
export function formatData(data,fileName,style,type){
      let tip=data.tip;
      let header=data.header;
      let body=data.body;
      let title=data.title;
      let color=style.color||'000000';
      let border=style.border||{style:'thin',color:'DADCDD'};
      let fillColor=style.fillColor||'ffffff';
      let tipStyle=style.tip;
      let headerStyle=style.header;
      let titleStyle=style.title;
      let bodyStyle=style.body;
      let ass_data=data.ass_data||[];
      let file = new xlsxs.File();
      let sheet =file.addSheet('Sheet1');
      if(tip!=null){
        let tipRow = sheet.addRow();
        let tipCell=tipRow.addCell();
        tipRow.setHeightCM(0.8);
        tipCell.value=tip.field_name;
        tipCell.style.align.v = 'top';
        tipCell.style.align.h = 'left';
        tipCell.hMerge =header.length-1;
        tipCell.vMerge = 0;

        renderBorder(tipCell,{style:border.style,color:border.color})
        renderFillColor(tipCell,fillColor)
        tipCell.style.font.color=color;
        if(tipStyle){
          if(tipStyle.border){
            renderBorder(tipCell,{style:tipStyle.border.style,color:tipStyle.border.color})
          }
          if(tipStyle.fillColor){
            renderFillColor(tipCell,tipStyle.fillColor)
          }
          if(tipStyle.color){
            tipCell.style.font.color=tipStyle.color;
          }
        }
        sheet.row(0).height=160
      }

      if(title!=null){
        let headerRow = sheet.addRow();
        let hc=headerRow.addCell();
        hc.value=title.field_name;
        hc.style.align.v = 'center';
        hc.style.align.h = 'center';
        hc.hMerge =header.length-1;
        hc.vMerge = 0;
        renderBorder(hc,{style:border.style,color:border.color})
        renderFillColor(hc,fillColor)
        hc.style.font.color=color;
        if(titleStyle){
          if(titleStyle.border){
        renderBorder(hc,{style:titleStyle.border.style,color:titleStyle.border.color})
          }
          if(titleStyle.fillColor){
            renderFillColor(hc,titleStyle.fillColor)
          }
          if(titleStyle.color){
            hc.style.font.color=titleStyle.color;
          }
        }
      }
      if(header.length>0){
        let row = sheet.addRow();
        for(let i=0;i<header.length;i++){
          let cell=row.addCell();
          cell.value=header[i].field_name;
          cell.style.align.v = 'center';
          cell.style.align.h = 'center';
          renderBorder(cell,{style:border.style,color:border.color})
          renderFillColor(cell,fillColor)
          cell.style.font.color=color;
          sheet.col(i).width = 23;
          if(headerStyle){
            if(headerStyle.border){
              renderBorder(cell,{style:headerStyle.border.style,color:headerStyle.border.color})
            }
            if(headerStyle.fillColor){
              renderFillColor(cell,headerStyle.fillColor)
            }
            if(headerStyle.color){
              cell.style.font.color=headerStyle.color;
            }
          }
          if(header[i].is_required==1){
            cell.style.font.color = 'ff0000';
          }

        }

      }
      if(body!=undefined&&body.length>0){
        for(let i=0;i<body.length;i++){
          let row = sheet.addRow();
          for(let j=0;j<header.length;j++){
            let cell=row.addCell();

            if(header[j].association_type==1){
              stringJoin(cell,ass_data[header[j].field],body[i][header[j].map_field],header[j].association_field,header[j].association_parent_field,'')
            }else if(header[j].association_type==2){
              stringReplace(cell,ass_data[header[j].field],body[i][header[j].field],header[j].association_field,header[j].association_parent_field,body[i][header[j].field])
            }else  if(header[j].association_type==3){
              stringJoin1(cell,ass_data[header[j].field],body[i][header[j].map_field],'','',body[i][header[j].field])
            }else{

              cell.value=body[i][header[j].field];
            }

            cell.style.align.v = 'center';
            cell.style.align.h = 'center';
            renderBorder(cell,{style:border.style,color:border.color})
            renderFillColor(cell,fillColor)
            cell.style.font.color=color;
            if(bodyStyle){
              if(bodyStyle.border){
                renderBorder(cell,{style:bodyStyle.border.style,color:bodyStyle.border.color})
              }
              if(bodyStyle.fillColor){
                renderFillColor(cell,bodyStyle.fillColor)
              }
              if(bodyStyle.color){
                cell.style.font.color=bodyStyle.color;
              }

              if(bodyStyle.rows){
                let bg=(i%2==0)?bodyStyle.rows.odd:bodyStyle.rows.even;
                renderFillColor(cell,bg)
              }else if(bodyStyle.cols){
                let bg=(j%2==0)?bodyStyle.cols.odd:bodyStyle.cols.even;
                renderFillColor(cell,bg)
              }else{
                renderFillColor(cell,bodyStyle.fillColor)
              }

            }
          }
        }
      }
      console.log(3333,file)
  // file.saveAs().pipe(fs.createWriteStream(fileName))
  //   .on('finish', () => console.log('Done.'));
  // var  tmpDown = new Blob([s2ab(readXlsx.write(file, { bookType: (type == undefined ? 'xlsx' : type), bookSST: false, type: 'binary' }//这里的数据是用来定义导出的格式类型
  // ))], { type: "" });
 // saveAs(tmpDown, "这里是下载的文件名" + '.' + (wopts.bookType == "biff2" ? "xls" : wopts.bookType));
  file.saveAs('blob')
    .then(function(content) {
      saveAs(content, fileName);
    });
}
//字符串转字符流
function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}
    function renderBorder(cell,borderStyle) {
      let style=borderStyle.style||'thin';
      let color=borderStyle.color||'DADCDD';
      cell.style.border.top = style;
      cell.style.border.topColor = color;
      cell.style.border.left = style;
      cell.style.border.leftColor = color;
      cell.style.border.bottom = style;
      cell.style.border.bottomColor = color;
      cell.style.border.right = style;
      cell.style.border.rightColor = color;
    }
    function renderFillColor(cell,color){
      cell.style.fill.patternType = 'solid';
      cell.style.fill.fgColor = color||'ff0000';//背景颜色
    }
    function stringJoin(obj,id,field,fieldParent,str){
      if(!obj[id]){
        return '';
      }
      let ids=obj[id][fieldParent];
      if(str){
        str=obj[id][field]+'-'+str;
      }else{

        str=obj[id][field]
      }

      if(obj[ids]){
        str =stringJoin(obj,ids,field,fieldParent,str)
      }
      return str
    }

    function stringReplace(obj,id,field,fieldParent,str){
      if(!obj[id]){
        return '';
      }
      let ids=obj[id][fieldParent];
      str=obj[id][field];
  return str
    }
 export   function   exportExcel(data,filename,style){
      let file = new xlsx.File();
      let color=style.color||'000000';
      let border=style.border||{style:'thin',color:'DADCDD'};
      let fillColor=style.fillColor||'ffffff';
      let headerStyle=style.header;
      let bodyStyle=style.body;
      let header=data.header;
      let body=data.body;

      let sheet =file.addSheet('Sheet1');
      let headerrow = sheet.addRow();
      for(let i in header){
        let cell=headerrow.addCell();
        cell.value=header[i];
        cell.style.align.v = 'center';
        cell.style.align.h = 'center';
        renderBorder(cell,{style:border.style,color:border.color})
        renderFillColor(cell,fillColor)
        cell.style.font.color=color;

        if(headerStyle){
          if(headerStyle.border){
            renderBorder(cell,{style:headerStyle.border.style,color:headerStyle.border.color})
          }
          if(headerStyle.fillColor){
            renderFillColor(cell,headerStyle.fillColor)
          }
          if(headerStyle.color){
            cell.style.font.color=headerStyle.color;
          }
        }
      }
      for(let i in body){
        let item =body[i]
        let bodyrow = sheet.addRow();
        for(let j in item){
          let cell=bodyrow.addCell();
          cell.value=item[j];
          cell.style.align.v = 'center';
          cell.style.align.h = 'center';
          renderBorder(cell,{style:border.style,color:border.color})
          renderFillColor(cell,fillColor)
          cell.style.font.color=color;

          if(bodyStyle){
            if(bodyStyle.border){
              renderBorder(cell,{style:bodyStyle.border.style,color:bodyStyle.border.color})
            }
            if(bodyStyle.fillColor){
              renderFillColor(cell,bodyStyle.fillColor)
            }
            if(bodyStyle.color){
              cell.style.font.color=bodyStyle.color;
            }
          }
        }
      }

   file.saveAs().pipe(fs.createWriteStream(filename))
     .on('finish', () => console.log('Done.'));
    }


    function  multistageHeaderExport(data,filename,style){
      let file = new xlsx.File();
      let color=style.color||'000000';
      let border=style.border||{style:'thin',color:'DADCDD'};
      let fillColor=style.fillColor||'ffffff';
      let headerStyle=style.header;
      let bodyStyle=style.body;
      let header=data.header;
      let body=data.body;
      let sheet =file.addSheet('Sheet1');
      for(let i in header){
        let headerrow = sheet.addRow();
        let item=header[i];
        for(let j in item){
          let cell=headerrow.addCell();
          cell.value=item[j].value;
          cell.hMerge = item[j].hMerge||0;
          cell.vMerge = item[j].vMerge||0;
          cell.style.align.v = 'center';
          cell.style.align.h = 'center';
          renderBorder(cell,{style:border.style,color:border.color})
          renderFillColor(cell,fillColor)
          cell.style.font.color=color;

          if(headerStyle){
            if(headerStyle.border){
              renderBorder(cell,{style:headerStyle.border.style,color:headerStyle.border.color})
            }
            if(headerStyle.fillColor){
              renderFillColor(cell,headerStyle.fillColor)
            }
            if(headerStyle.color){
              cell.style.font.color=headerStyle.color;
            }
          }
        }
      }


      for(let i in body){
        let item =body[i]
        let bodyrow = sheet.addRow();
        for(let j in item){
          let cell=bodyrow.addCell();
          cell.value=item[j];
          cell.style.align.v = 'center';
          cell.style.align.h = 'center';
          renderBorder(cell,{style:border.style,color:border.color})
          renderFillColor(cell,fillColor)
          cell.style.font.color=color;

          if(bodyStyle){
            if(bodyStyle.border){
              renderBorder(cell,{style:bodyStyle.border.style,color:bodyStyle.border.color})
            }
            if(bodyStyle.fillColor){
              renderFillColor(cell,bodyStyle.fillColor)
            }
            if(bodyStyle.color){
              cell.style.font.color=bodyStyle.color;
            }
          }
        }
      }
      file.saveAs('blob')
        .then(function(content) {
          FileSaver(content, filename);
        });
      // file
      //   .saveAs()
      //   .pipe(fs.createWriteStream(fileName))
      //   .on('finish', () => console.log('Done.'));
    }

export function resolveData(obj,table_name,table_model,http,url,cb){
  let wb;//读取完成的数据

  let rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";//是否将文件读取为二进制字符串
  if (!obj.files) {
    return;
  }
  // let  XLSX=readXlsx;

  let f = obj.files[0];
  let reader = new FileReader();
  let data_obj;
  reader.onload = function (e) {
    let data = e.target.result;
    if (rABS) {
      wb = XLSX.read(data, {type: 'binary'});
    } else {
      let arr = fixdata(data);
      wb = XLSX.read(btoa(arr), {type: 'base64'});
    }
    console.log(wb)
    return;
    data_obj= bianli(wb.Sheets[wb.SheetNames[0]])
    dataUpload(data_obj,table_name,table_model,http,url,cb)
  };
  if (rABS) {
    reader.readAsBinaryString(f);
  } else {
    reader.readAsArrayBuffer(f);
  }
}

function fixdata(data) {
  let o = "", l = 0, w = 10240;
  for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
  o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
  return o;
}

function dataUpload(excel_obj,table_name,table_model,http,url,cb){
  let tip=table_model.tip;
  let title=table_model.title;
  let header=table_model.header;
  let rows_num=1;
  let data_arr=[];
  let required_obj={};
  let association_obj={};
  let ass_data=table_model.ass_data;
  let ass_table_obj={};
  if(tip!=null){
    rows_num++;
  }
  if(title!=null){
    rows_num++;
  }
  if(header.length<1){
    cb('上传错误',null);
    return;
  }
  let char_obj={};
  //检查上传excel是否和下载的模板字段一样
  for(let i=0;i<header.length;i++){
    let char=String.fromCharCode(64 + parseInt(i+1));
    char_obj[char]={
      field:header[i].field,
      field_name:header[i].field_name,
      is_required:header[i].is_required,
      association_table:header[i].association_table,
      association_type:header[i].association_type,
      association_field:header[i].association_field,
      map_field:header[i].map_field,
      association_parent_field:header[i].association_parent_field
    }
    if(header[i].is_required==1){
      required_obj[header[i].field]= char_obj[char]
    }else   if(header[i].association_type==1){
      association_obj[header[i].field]= char_obj[char]
    }
    if(excel_obj[char+rows_num]!=header[i].field_name){
      cb('上传excel和下载的模板字段不相同',null)
      return;
    }
  }
  //将excel读出的数据转换为数组
  for(let i=rows_num+1;;i++){
    let obj={};
    let item=0;
    for(let j=0;j<header.length;j++){
      let char=String.fromCharCode(64 + parseInt(j+1));
      if(excel_obj[char+i]){
        obj[char_obj[char].field]=excel_obj[char+i];
        item++;
      }
    }
    if(item==0){
      break;
    }
    data_arr.push(obj)
  }
  //验证必填字段是否为空
  for(let i=0;i<data_arr.length;i++){
    for(let j in required_obj){
      if(!data_arr[i][j]){
        cb(' \''+required_obj[j].field_name+'\' 不能为空',null)
        return;
      }
    }
  }

  let _this=this;
  let params = {table_name: table_name,data_arr:data_arr,association_obj:association_obj};
  http.post(url, params).then(function (data) {
    if(!data.err){
      cb(null,'上传成功')
    }else{
      cb(data.err,'上传失败')
    }

  }).catch(function (err) {
    cb(err,'上传失败')
  })
}

function bianli(obj){
  let data={}
  for(let i in obj){
    data[i]=obj[i].v;
  }
  return data
}


