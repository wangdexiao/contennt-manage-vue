/**
 * Created with JetBrains PhpStorm.
 * User: xuheng
 * Date: 12-8-8
 * Time: 下午2:00
 * To change this template use File | Settings | File Templates.
 */
var templates = [
    {
        "pre":"pre0.png",
        'title':lang.blank,
        'preHtml':'<p class="ue_t">&nbsp;欢迎使用UEditor！</p>',
        "html":'<p class="ue_t">欢迎使用UEditor！</p><br/><img src="images/pre0.png"/>'

    },
    {
        "pre":"huangguatemplate.png",
        'title':lang.huaguatemplate,
        'preHtml':'<p class="ue_t">&nbsp;欢迎使用黄瓜溯源模板</p>',
        "html":'<!DOCTYPE html>\n' +
          '<html data-use-rem="750">\n' +
          '<head>\n' +
          '    <meta charset="UTF-8">\n' +
          '    <title>欢迎进入测试企业追溯系统</title>\n' +
          '    <meta name="renderer" content="webkit">\n' +
          '    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n' +
          '    <meta name="viewport"\n' +
          '          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n' +
          '    <meta name="format-detection" content="telephone=no, email=no">\n' +
          '    <meta name="google" value="notranslate">\n' +
          '    <meta name="description" content="">\n' +
          '    <meta name="author" content="Administrator">\n' +
          '    <meta name="apple-itunes-app" content="app-id=123131232132">\n' +
          '    <meta name="HandheldFriendly" content="true">\n' +
          '    <meta name="MobileOptimized" content="320">\n' +
          '    <meta name="screen-orientation" content="portrait">\n' +
          '    <meta name="x5-orientation" content="portrait">\n' +
          '    <meta name="full-screen" content="yes">\n' +
          '    <meta name="x5-fullscreen" content="true">\n' +
          '    <meta name="browsermode" content="application">\n' +
          '    <meta name="x5-page-mode" content="app">\n' +
          '    <meta name="x5-page-mode" content="default">\n' +
          '    <link rel="stylesheet" href="/Content/newMobileTrace/css/reset-h5.css">\n' +
          '    <link rel="stylesheet" href="/Content/newMobileTrace/css/index.css">\n' +
          '    <link rel="stylesheet" href="/Content/newMobileTrace/css/swiper.css">\n' +
          '    <link rel="stylesheet" id="hj" href="/Content/newMobileTrace/font/iconfont.css">\n' +
          '\n' +
          '\n' +
          '    <style>\n' +
          '        /*.swiper-wrapper img {\n' +
          '            height: 4.34rem;\n' +
          '        }*/\n' +
          '    </style>\n' +
          '</head>\n' +
          '<body>\n' +
          '<div>\n' +
          '    <script type="text/javascript" src="/Content/mobileTrace/js/jquery-2.1.4.js"></script>\n' +
          '    <script src="/Content/newMobileTrace/js/rem.js"></script>\n' +
          '    <script src="/Content/newMobileTrace/js/swiper.min.js"></script>\n' +
          '\n' +
          '\n' +
          '    <style>\n' +
          '        /*.swiper-wrapper img {\n' +
          '            height: 4.34rem;\n' +
          '        }*/\n' +
          '\n' +
          '        .banner2 {\n' +
          '            margin: -0.1rem 0 0.3rem 0;\n' +
          '        }\n' +
          '\n' +
          '        .banner2 img {\n' +
          '            height: 3.27rem;\n' +
          '        }\n' +
          '    </style>\n' +
          '\n' +
          '    <div class="swiper-container" id="swiper-container1">\n' +
          '        <div class="swiper-wrapper">\n' +
          '            <div class="swiper-slide">\n' +
          '                <a href="javascript:;"><img src="/Attachment/DownLoad/c4a8c768-e3bb-4fbc-bb2f-846d2a2b591f"\n' +
          '                                            width="100%" height="auto" class="cpimg"/></a>\n' +
          '            </div>\n' +
          '\n' +
          '        </div>\n' +
          '        <div class="swiper-pagination" id="swiper-pagination1"></div>\n' +
          '    </div>\n' +
          '\n' +
          '\n' +
          '    <div class="fw-box">\n' +
          '        <p class="p1">您查询的溯源码为</p>\n' +
          '        <div class="fwCode">20201111021</div>\n' +
          '        <p class="p2">此码已核实是由<span>测试企业</span>出品的系列产品，感谢您的购买。</p>\n' +
          '    </div>\n' +
          '    <!--产品基本信息-->\n' +
          '    <img src=\'/Content/newMobileTrace/images/top_bg.jpg\' width="100%"/>\n' +
          '    <div class="cpinfo-box ">\n' +
          '        <div class="clearfix">\n' +
          '            <img src="/Attachment/DownLoad/c4a8c768-e3bb-4fbc-bb2f-846d2a2b591f" class="cpimg"/>\n' +
          '\n' +
          '\n' +
          '            <h1 class="cpmame">黄瓜</h1>\n' +
          '            <p>&nbsp;</p>\n' +
          '\n' +
          '\n' +
          '        </div>\n' +
          '        <ul class="cpinfo-list clearfix">\n' +
          '            <li>商品条码：<span>00000000</span></li>\n' +
          '            <li>批次号：<span>202011001</span></li>\n' +
          '            <li>品牌：<span>杲城合作联社</span></li>\n' +
          '            <li>包装规格：<span>斤</span></li>\n' +
          '            <li>单位：<span>斤</span></li>\n' +
          '            <li>品类：<span>加工成品</span></li>\n' +
          '\n' +
          '\n' +
          '        </ul>\n' +
          '    </div>\n' +
          '    <img src=\'/Content/newMobileTrace/images/bottom_bg.jpg\' width="100%"/>\n' +
          '    <!--滑动按钮部分-->\n' +
          '    <div id="scrool-flg"></div>\n' +
          '    <div class=\'clearfix\' id=\'boxtop\'>\n' +
          '        <ul class="btn-box">\n' +
          '\n' +
          '            <li><img src=\'/Content/newMobileTrace/images/btn_wl01.png\' class=\'wl\'/>\n' +
          '                <p>物流查询</p></li>\n' +
          '            <li><img src=\'/Content/newMobileTrace/images/btn_zz00.png\' class=\'zz\'/>\n' +
          '                <p>种植查询</p></li>\n' +
          '            <li><img src=\'/Content/newMobileTrace/images/btn_szhj00.png\' class=\'szhj\'/>\n' +
          '                <p>生长环境</p></li>\n' +
          '            <li><img src=\'/Content/newMobileTrace/images/btn_scjg00.png\' class=\'scjg\'/>\n' +
          '                <p>生产加工</p></li>\n' +
          '            <li><img src=\'/Content/newMobileTrace/images/btn_lxwm00.png\' class=\'lxwm\'/>\n' +
          '                <p>联系我们</p></li>\n' +
          '        </ul>\n' +
          '    </div>\n' +
          '    <div class=\'info info-wl\' style="display: none; margin-bottom: 10px">\n' +
          '        <style>\n' +
          '            .tel {\n' +
          '                margin-top: 30px;\n' +
          '            }\n' +
          '        </style>\n' +
          '\n' +
          '\n' +
          '        <div class="box box1">\n' +
          '            <h2 class="tit">生产入库<i class="arrow arrow_wl_down"></i></h2>\n' +
          '            <ul class="detail clearfix">\n' +
          '                <li class="fb">单号：SCRK202011110001</li>\n' +
          '                <li>2020-11-11</li>\n' +
          '                <li>&nbsp;</li>\n' +
          '                <li>成品库</li>\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '        <div class="box box1">\n' +
          '            <h2 class="tit">销售出库<i class="arrow arrow_wl_down"></i></h2>\n' +
          '            <ul class="detail clearfix">\n' +
          '                <li class="fb">单号：XSCK202011110001</li>\n' +
          '                <li>2020-11-11</li>\n' +
          '                <li>&nbsp;</li>\n' +
          '                <li>大润发</li>\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '\n' +
          '        <script>\n' +
          '          function checkAccessory (fileId) {\n' +
          '            window.open(\'/Query/SelQCImportData/?fileId=\' + fileId)\n' +
          '          }\n' +
          '        </script>\n' +
          '    </div>\n' +
          '    <!--种植-->\n' +
          '    <div class=\'info info-zz\' style="display: none;">\n' +
          '\n' +
          '        <div class="xq">\n' +
          '            <p>批次号：<span>2020111101</span></p>\n' +
          '            <p>产品名称：<span>种植黄瓜</span></p>\n' +
          '            <p>批次数量：<span>100亩</span></p>\n' +
          '            <p>批次类型：<span>种植批次</span></p>\n' +
          '            <p>完成时间：<span>2020/11/11 0:00:00</span></p>\n' +
          '            <p>创建人：<span>山东兆信</span></p>\n' +
          '            <p>记录状态：<span>完成</span></p>\n' +
          '\n' +
          '        </div>\n' +
          '        <div class="box box2">\n' +
          '            <h2 class="tit">基地信息<i class="arrow arrow_zz_down"></i></h2>\n' +
          '            <ul class="detail clearfix" style="width:100%;padding:0;margin:0 auto;">\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">基地信息：王杲铺镇***村张三种植基地1号棚</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">基地大小：100</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">责任人：张三</li>\n' +
          '                <li><img src="/Attachment/DownLoad/eca36725-cc35-4dc2-890a-310b982857fa" alt="通用的占位符缩略图"/></li>\n' +
          '\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '        <div class="box box2">\n' +
          '            <h2 class="tit">育苗<i class="arrow arrow_zz_down"></i></h2>\n' +
          '            <ul class="detail clearfix" style="width:100%;padding:0;margin:0 auto;">\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">育苗名称：青黄瓜种苗</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">育苗时间：2020-10-01</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">责任人：张三</li>\n' +
          '                <li><img src="/Attachment/DownLoad/d6cbd9f7-88a3-4315-a035-453b009cacb1" alt="通用的占位符缩略图"/></li>\n' +
          '\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '        <div class="box box2">\n' +
          '            <h2 class="tit">育苗移栽<i class="arrow arrow_zz_down"></i></h2>\n' +
          '            <ul class="detail clearfix" style="width:100%;padding:0;margin:0 auto;">\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">日期：2020-10-03</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">责任人：张三</li>\n' +
          '                <li><img src="/Attachment/DownLoad/cbded8fb-92bc-41a9-9777-62bf2398dc01" alt="通用的占位符缩略图"/></li>\n' +
          '\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '        <div class="box box2">\n' +
          '            <h2 class="tit">灌溉<i class="arrow arrow_zz_down"></i></h2>\n' +
          '            <ul class="detail clearfix" style="width:100%;padding:0;margin:0 auto;">\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">灌溉方式：滴灌</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">操作人：张三</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">日期：2020-10-14</li>\n' +
          '                <li><img src="/Attachment/DownLoad/db00231f-11dc-4fa5-ad74-85b7a4c51989" alt="通用的占位符缩略图"/></li>\n' +
          '\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '        <div class="box box2">\n' +
          '            <h2 class="tit">施肥<i class="arrow arrow_zz_down"></i></h2>\n' +
          '            <ul class="detail clearfix" style="width:100%;padding:0;margin:0 auto;">\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">肥料名称：有机复合肥</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">用量：100kg/亩</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">责任人：张三</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">日期：2020-10-28</li>\n' +
          '                <li><img src="/Attachment/DownLoad/2248ba24-b0fd-4074-a753-153a3da74bb9" alt="通用的占位符缩略图"/></li>\n' +
          '\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '        <div class="box box2">\n' +
          '            <h2 class="tit">除草<i class="arrow arrow_zz_down"></i></h2>\n' +
          '            <ul class="detail clearfix" style="width:100%;padding:0;margin:0 auto;">\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">事件描述：人工除草</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">操作人：张三</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">日期：2020-10-31</li>\n' +
          '                <li><img src="/Attachment/DownLoad/f656c21c-08fe-4948-9a5c-20f0dfc069a5" alt="通用的占位符缩略图"/></li>\n' +
          '\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '        <div class="box box2">\n' +
          '            <h2 class="tit">病虫害防治<i class="arrow arrow_zz_down"></i></h2>\n' +
          '            <ul class="detail clearfix" style="width:100%;padding:0;margin:0 auto;">\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">更新时间：2020-11-07</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">用药名称：黄板</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">用量：10张</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">责任人：张三</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">日期：2020-11-07</li>\n' +
          '                <li><img src="/Attachment/DownLoad/c32a4241-5db9-4224-9016-08fc9decbe54" alt="通用的占位符缩略图"/></li>\n' +
          '\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '        <div class="box box2">\n' +
          '            <h2 class="tit">采收<i class="arrow arrow_zz_down"></i></h2>\n' +
          '            <ul class="detail clearfix" style="width:100%;padding:0;margin:0 auto;">\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">更新时间：2020-11-11</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">责任人：张三</li>\n' +
          '                <li style="width:100%;height:auto;word-break:break-all;">日期：2020-11-11</li>\n' +
          '                <li><img src="/Attachment/DownLoad/b9ba0ade-80ae-4b77-84a6-c5411bac958f" alt="通用的占位符缩略图"/></li>\n' +
          '\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '\n' +
          '    </div>\n' +
          '    <!--生长环境-->\n' +
          '    <div class=\'info info-szhj\' style="display: none;">\n' +
          '\n' +
          '\n' +
          '        <div class="xq-item">\n' +
          '            <div class="xq-item-content">\n' +
          '                <div class="data-head">降雨量</div>\n' +
          '                <div id="content" style="width:6.8rem;margin:0 auto;height:5.5rem;"></div>\n' +
          '                <div id="video-container"></div>\n' +
          '            </div>\n' +
          '        </div>\n' +
          '\n' +
          '        <div class="xq-nav">\n' +
          '            <div class="swiper-container" id="sw">\n' +
          '                <div class="swiper-wrapper">\n' +
          '                    <div class="swiper-slide">\n' +
          '                        <div class="item-list clearfix">\n' +
          '                            <a href="javascript:;" class="nav-active" data-title="雨量">\n' +
          '                                <i class="iconfont icon-jiangyu" style="font-size:0.5rem;"></i>\n' +
          '                                <p>降雨量</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                            <a href="javascript:;" data-title="土温">\n' +
          '                                <i class="iconfont icon-turangwendu" style="font-size:0.5rem;"></i>\n' +
          '                                <p>土壤温度</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                            <a href="javascript:;" data-title="土湿">\n' +
          '                                <i class="iconfont icon-skturangshidu-yunle" style="font-size:0.5rem;"></i>\n' +
          '                                <p>土壤湿度</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                            <a href="javascript:;" data-title="气温">\n' +
          '                                <i class="iconfont icon-kongqishidu" style="font-size:0.5rem;"></i>\n' +
          '                                <p>空气温度</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                            <a href="javascript:;" data-title="湿度">\n' +
          '                                <i class="iconfont icon-shidu" style="font-size:0.5rem;"></i>\n' +
          '                                <p>空气湿度</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                            <a href="javascript:;" data-title="PH">\n' +
          '                                <i style="font-size:0.47rem;">PH</i>\n' +
          '                                <p style="padding-top:0.1rem;">PH值</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                            <a href="javascript:;" data-title="风速">\n' +
          '                                <i class="iconfont icon-fengsu"></i>\n' +
          '                                <p>风速</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                            <a href="javascript:;" data-title="光照">\n' +
          '                                <i class="iconfont icon-guangzhaoxiaoguo"></i>\n' +
          '                                <p>光照</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '\n' +
          '                    <div class="swiper-slide">\n' +
          '                        <div class="item-list clearfix">\n' +
          '                            <a href="javascript:;" data-title="有机质">\n' +
          '                                <i class="iconfont icon-icon3"></i>\n' +
          '                                <p>有机质</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                            <a href="javascript:;" data-title="大气压力">\n' +
          '                                <i class="iconfont icon-qiya"></i>\n' +
          '                                <p>气压</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                            <a href="javascript:;" data-title="视频">\n' +
          '                                <i class="iconfont icon-shipin"></i>\n' +
          '                                <p>现场视频</p>\n' +
          '                            </a>\n' +
          '\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '\n' +
          '                </div>\n' +
          '\n' +
          '                <div class="swiper-pagination" id="navs"></div>\n' +
          '            </div>\n' +
          '        </div>\n' +
          '\n' +
          '        <script src="/Content/newMobileTrace/js/echarts.common.min.js"></script>\n' +
          '        <script>\n' +
          '          $(function () {\n ' +
          'console.log("文档加载完成")' +
          'alert("文档加载完成")' +

          '            $(\'#content\').css({\n' +
          '              \'height\': \'5.5rem\',\n' +
          '              \'width\': \'6.8rem;\',\n' +
          '              \'margin\': \'0 auto\'\n' +
          '            })\n' +
          '            //数据导航滑块\n' +
          '            var navSwiper = new Swiper(\'#sw\', {\n' +
          '              pagination: \'#navs\',\n' +
          '              paginationClickable: true,\n' +
          '              observer: true,\n' +
          '              observeParents: true,\n' +
          '              spaceBetween: 0,\n' +
          '              centeredSlides: true,\n' +
          '              autoplay: false,\n' +
          '              autoplayDisableOnInteraction: false\n' +
          '            })\n' +
          '\n' +
          '            //点击触发不同模块，加载不同数据\n' +
          '            $(\'#sw\').find(\'a\').click(function () {\n' +
          '              var attrStr = $(this).attr(\'data-title\')\n' +
          '              //数据模块选中状态\n' +
          '              $(this).addClass(\'nav-active\').siblings().removeClass(\'nav-active\')\n' +
          '              $(this).parent().parent().siblings().find(\'a\').removeClass(\'nav-active\')\n' +
          '              //点击后走接口\n' +
          '              DoSearch(attrStr)\n' +
          '\n' +
          '            })\n' +
          '          })\n' +
          '\n' +
          '          //初始化状态降雨量\n' +
          '          var initState = DoSearch(\'降雨量\')\n' +
          '\n' +
          '          function DoSearch (str) {\n' +
          '            var option = {\n' +
          '              title: [\n' +
          '                {\n' +
          '                  text: \'（mm）\',\n' +
          '                  right: \'4%\',\n' +
          '                  top: \'7%\',\n' +
          '                  textStyle: {\n' +
          '                    color: \'#333\',\n' +
          '                    fontSize: 12,\n' +
          '                    fontWeight: \'400\'\n' +
          '                  }\n' +
          '                }, {\n' +
          '                  text: \'（月）\',\n' +
          '                  right: \'0\',\n' +
          '                  bottom: \'4%\',\n' +
          '                  textStyle: {\n' +
          '                    color: \'#333\',\n' +
          '                    fontSize: 12,\n' +
          '                    fontWeight: \'400\'\n' +
          '                  }\n' +
          '                }\n' +
          '              ],\n' +
          '              tooltip: {\n' +
          '                trigger: \'axis\',\n' +
          '                axisPointer: {\n' +
          '                  lineStyle: {\n' +
          '                    color: \'#ddd\'\n' +
          '                  }\n' +
          '                }\n' +
          '              },\n' +
          '\n' +
          '              color: [\'#f79494\', \'#94e5f7\', \'#b9f794\', \'#f394f7\', \'#89e5b9\', \'#94e5f7\', \'#b9f794\', \'#f394f7\'],\n' +
          '              legend: {\n' +
          '                right: \'5%\',\n' +
          '                top: \'0\',\n' +
          '                orient: \'horizontal\',\n' +
          '                data: [\'同期最高\', \'同期最低\']\n' +
          '              },\n' +
          '\n' +
          '              grid: {\n' +
          '                left: \'7%\',\n' +
          '                right: \'7%\',\n' +
          '                top: \'18%\',\n' +
          '                bottom: \'5%\',\n' +
          '                containLabel: true\n' +
          '              },\n' +
          '\n' +
          '              xAxis: {\n' +
          '                type: \'category\',\n' +
          '                name: \'\',\n' +
          '                data: [\'\'],\n' +
          '                boundaryGap: false,\n' +
          '                splitLine: {\n' +
          '                  show: false,\n' +
          '                  interval: \'auto\',\n' +
          '                  lineStyle: {\n' +
          '                    color: [\'#D4DFF5\']\n' +
          '                  }\n' +
          '                },\n' +
          '                axisTick: {\n' +
          '                  show: false\n' +
          '                },\n' +
          '                axisLine: {\n' +
          '                  lineStyle: {\n' +
          '                    color: \'#D4DFF5\',\n' +
          '                    width: 1\n' +
          '                  }\n' +
          '                },\n' +
          '                axisLabel: {\n' +
          '                  margin: 10,\n' +
          '                  textStyle: {\n' +
          '                    fontSize: 14,\n' +
          '                    color: \'#000\'\n' +
          '                  }\n' +
          '                }\n' +
          '              },\n' +
          '              yAxis: {\n' +
          '                type: \'value\',\n' +
          '                name: \'\',\n' +
          '                position: \'right\',\n' +
          '                splitLine: {\n' +
          '                  lineStyle: {\n' +
          '                    color: [\'#D4DFF5\']\n' +
          '                  }\n' +
          '                },\n' +
          '                axisTick: {\n' +
          '                  show: false\n' +
          '                },\n' +
          '                axisLine: {\n' +
          '                  lineStyle: {\n' +
          '                    color: \'#D4DFF5\',\n' +
          '                    width: 0\n' +
          '                  }\n' +
          '                },\n' +
          '                axisLabel: {\n' +
          '                  margin: 10,\n' +
          '                  textStyle: {\n' +
          '                    fontSize: 14,\n' +
          '                    color: \'#000\'\n' +
          '                  }\n' +
          '                }\n' +
          '              },\n' +
          '              series: [\n' +
          '                {\n' +
          '                  name: \'同期最高\',\n' +
          '                  type: \'line\',\n' +
          '                  smooth: false,\n' +
          '                  showSymbol: true,\n' +
          '                  symbol: \'emptyCircle\',\n' +
          '                  symbolSize: 4,\n' +
          '                  data: [\'\'],\n' +
          '                  lineStyle: {\n' +
          '                    normal: {\n' +
          '                      width: 1\n' +
          '                    }\n' +
          '                  }\n' +
          '                },\n' +
          '                {\n' +
          '                  name: \'同期最低\',\n' +
          '                  type: \'line\',\n' +
          '                  smooth: false,\n' +
          '                  showSymbol: true,\n' +
          '                  symbol: \'circle\',\n' +
          '                  symbolSize: 4,\n' +
          '                  data: [\'\'],\n' +
          '                  lineStyle: {\n' +
          '                    normal: {\n' +
          '                      width: 1\n' +
          '                    }\n' +
          '                  }\n' +
          '                }]\n' +
          '            }\n' +
          '\n' +
          '            //标题头根据data-title属性名称变化\n' +
          '            $(\'.data-head\').html(str)\n' +
          '\n' +
          '            //根据data-title属性名变化单位\n' +
          '            switch (str) {\n' +
          '              case \'降雨量\':\n' +
          '                option.title[0].text = \'（mm）\'\n' +
          '                option.title[1].text = \'（月）\'\n' +
          '                break\n' +
          '\n' +
          '              case \'土壤温度\':\n' +
          '                option.title[0].text = \'（℃）\'\n' +
          '                option.title[1].text = \'（月）\'\n' +
          '                break\n' +
          '\n' +
          '              case \'土壤湿度\':\n' +
          '                option.title[0].text = \'（rh）\'\n' +
          '                option.title[1].text = \'（月）\'\n' +
          '                break\n' +
          '\n' +
          '              case \'空气温度\':\n' +
          '                option.title[0].text = \'（℃）\'\n' +
          '                option.title[1].text = \'（月）\'\n' +
          '                break\n' +
          '\n' +
          '              case \'空气湿度\':\n' +
          '                option.title[0].text = \'（rh）\'\n' +
          '                option.title[1].text = \'（月）\'\n' +
          '                break\n' +
          '\n' +
          '              case \'PH值\':\n' +
          '                option.title[0].text = \'（PH）\'\n' +
          '                option.title[1].text = \'（月）\'\n' +
          '                break\n' +
          '\n' +
          '              case \'风速\':\n' +
          '                option.title[0].text = \'（m/s）\'\n' +
          '                option.title[1].text = \'（月）\'\n' +
          '                break\n' +
          '\n' +
          '              case \'光照\':\n' +
          '                option.title[0].text = \'（lux）\'\n' +
          '                option.title[1].text = \'（月）\'\n' +
          '                break\n' +
          '\n' +
          '              case \'有机质\':\n' +
          '                option.title[0].text = \'（g/kg）\'\n' +
          '                option.title[1].text = \'（月）\'\n' +
          '                break\n' +
          '\n' +
          '              case \'气压\':\n' +
          '                option.title[0].text = \'（pa）\'\n' +
          '                option.title[1].text = \'（月）\'\n' +
          '                break\n' +
          '            }\n' +
          '\n' +
          '\n' +
          '            //初始化echarts\n' +
          '            var myChart = echarts.init(document.getElementById(\'content\'))\n' +
          '            if (str != \'视频\') {\n' +
          '              $(\'#content\').show().css({\n' +
          '                \'width\': \'100%\',\n' +
          '                \'height\': \'5.5rem\'\n' +
          '              })\n' +
          '              $(\'#video-container\').hide()\n' +
          '\n' +
          '              //x轴月份值\n' +
          '              //option.xAxis.data = [\'01\', \'02\', \'03\', \'04\', \'05\', \'06\', \'07\', \'08\', \'09\', "10", \'11\', \'12\'];\n' +
          '\n' +
          '              $.ajax({\n' +
          '                url: \'http://trace.zx3315.cn/Individuation/GetDataByEnvironmentType\',\n' +
          '                type: \'post\',\n' +
          '                async: false,\n' +
          '                data: {\n' +
          '                  corpId: \'56\',\n' +
          '                  displayName: str,\n' +
          '                  startTime: \'2018/10/1 0:00:00\',\n' +
          '                  endTime: \'2020/12/20 15:27:24\',\n' +
          '                  addr: \'\'\n' +
          '                },\n' +
          '                dataType: \'json\',\n' +
          '                success: function (data) {\n' +
          '                  //月份最高点值\n' +
          '                  //option.series[0].data = [\'12\', \'14\', \'18\', \'14\', \'16\', \'18\', \'13\', \'50\', \'11\', \'10\', \'8\', \'6\'];\n' +
          '                  //月份最低点值\n' +
          '                  //option.series[1].data = [\'12\', \'14\', \'1\', \'4\', \'6\', \'8\', \'3\', \'0\', \'1\', \'0\', \'8\', \'6\'];\n' +
          '\n' +
          '                  option.title[1].text = data.differDayStr\n' +
          '                  option.xAxis.data = data.xAxis\n' +
          '                  option.series[0].data = data.maxData\n' +
          '                  option.series[1].data = data.minData\n' +
          '                },\n' +
          '                error: function () {\n' +
          '\n' +
          '                }\n' +
          '              })\n' +
          '              myChart.setOption(option)\n' +
          '            } else {\n' +
          '              //视频区域\n' +
          '              $(\'#content\').hide()\n' +
          '              $(\'#video-container\').show()\n' +
          '              var vStr = \'<div class="zy_media">\' +\n' +
          '                \'<video poster=""  webkit-playsinline>\' +\n' +
          '                \'<source src="http://ae-images.oss-cn-shenzhen.aliyuncs.com/20161215/2016121512085769-k01628u2czx.p702.1.mp4">\' +\n' +
          '                \'您的浏览器不支持HTML5视频\' +\n' +
          '                \'</video> </div> \'\n' +
          '              $(\'#video-container\').html(vStr)\n' +
          '              //视频播放\n' +
          '              zymedia(\'video\', {\n' +
          '                alwaysShowControls: false,\n' +
          '                preload: \'auto\',\n' +
          '                hideVideoControlsOnLoad: false,\n' +
          '                alwaysShowHours: true\n' +
          '              })\n' +
          '            }\n' +
          '          }\n' +
          '        </script>\n' +
          '    </div>\n' +
          '    <!--养殖-->\n' +
          '    <!--生产加工-->\n' +
          '    <div class=\'info info-scjg\' style="display: none;">\n' +
          '        <style>\n' +
          '            .info .box2 .detail li {\n' +
          '                width: 100%;\n' +
          '            }\n' +
          '        </style>\n' +
          '        <div class="xq">\n' +
          '            <p>批次号：<span>202011001</span></p>\n' +
          '            <p>产品名称：<span>黄瓜</span></p>\n' +
          '            <p>批次数量：<span>1000斤</span></p>\n' +
          '            <p>批次类型：<span>生产批次</span></p>\n' +
          '            <p>完成时间：<span>2020/11/11 0:00:00</span></p>\n' +
          '            <p>创建人：<span>山东兆信</span></p>\n' +
          '            <p>记录状态：<span>已使用完</span></p>\n' +
          '\n' +
          '        </div>\n' +
          '        <div class="box box2">\n' +
          '            <h2 class="tit">分拣包装<i class="arrow arrow_zz_down"></i></h2>\n' +
          '            <ul class="detail clearfix">\n' +
          '                <li>包装责任人：张三</li>\n' +
          '                <li>日期：2020-11-11</li>\n' +
          '                <li><img src="/Attachment/DownLoad/7265eaa2-18d1-4346-8926-debb1ad572ea" style="width:100%"\n' +
          '                         alt="通用的占位符缩略图"/></li>\n' +
          '\n' +
          '            </ul>\n' +
          '        </div>\n' +
          '\n' +
          '    </div>\n' +
          '    <!--个性化模块-->\n' +
          '    <!--联系我们-->\n' +
          '    <div class=\'info info-lxwm\' style="display: none">\n' +
          '\n' +
          '\n' +
          '        <div class="swiper-container" id="swiper-container2">\n' +
          '            <div class="swiper-wrapper">\n' +
          '                <div class="swiper-slide">\n' +
          '                    <a href="javascript:;"><img src="/Attachment/DownLoad/78791074-3ad9-4152-a6dc-e815b535b46b"\n' +
          '                                                width="100%"/></a>\n' +
          '                </div>\n' +
          '\n' +
          '            </div>\n' +
          '            <div class="swiper-pagination" id="swiper-pagination2"></div>\n' +
          '        </div>\n' +
          '        <p style="font-weight: bold;">企业介绍</p>\n' +
          '        <p><span style="background-color:#FFFFFF;"></span>\n' +
          '        <p>\n' +
          '            <span style="color:#333333;font-family:&quot;font-size:18px;background-color:#FFFFFF;">“合作联社的发展将引领全镇蔬菜、粮食以及特色产品加工这三大产业。计划通过三到五年的时间，把王杲铺建设成优质麦育种基地和绿色品牌蔬菜种植基地，实现粮食产业1800万元以上的增收，蔬菜产业4.7亿元以上的增收。</span>\n' +
          '        </p>\n' +
          '        <p>\n' +
          '            <br/>\n' +
          '        </p></p>\n' +
          '\n' +
          '\n' +
          '        <div class=\'info info-lxwm\' style="display: none;">\n' +
          '            <p>公司：测试企业</p>\n' +
          '            <p>联系电话：<a href="tel:">无</a></p>\n' +
          '            <p>固定电话：<a href="tel:0536-8221913">0536-8221913</a></p>\n' +
          '            <p>地址：山东省潍坊市奎文区鸢飞路397号</p>\n' +
          '            <p>邮编：无</p>\n' +
          '        </div>\n' +
          '\n' +
          '    </div>\n' +
          '\n' +
          '\n' +
          '</div>\n' +
          '\n' +
          '<script>\n' +
          '  var swiper1 = new Swiper(\'#swiper-container1\', {\n' +
          '    pagination: \'#swiper-pagination1\',\n' +
          '    paginationClickable: true,\n' +
          '    spaceBetween: 0,\n' +
          '    centeredSlides: true,\n' +
          '    autoplay: 21500,\n' +
          '    autoplayDisableOnInteraction: false\n' +
          '  })\n' +
          '\n' +
          '  //控制按钮盒子 当滑动到顶端时候固定在顶端\n' +
          '  $(window).scroll(function () {\n' +
          '    var winH = $(\'#scrool-flg\').offset().top - $(window).scrollTop()\n' +
          '\n' +
          '    if (winH < 0) {\n' +
          '      $(\'#boxtop\').addClass(\'btn-box-fixed\')\n' +
          '      $(\'#scrool-flg\').css(\'height\', \'2rem\')\n' +
          '    } else {\n' +
          '      $(\'#boxtop\').removeClass(\'btn-box-fixed\')\n' +
          '      $(\'#scrool-flg\').css(\'height\', \'1px\')\n' +
          '    }\n' +
          '  })\n' +
          '\n' +
          '  //上下按钮效果arrow\n' +
          '  $(\'.arrow\').click(function () {\n' +
          '    var obj = $(this)\n' +
          '    var name = $(this).attr(\'class\')\n' +
          '    if (name.indexOf(\'down\') >= 0) {\n' +
          '      obj.parents(\'.box\').find(\'.detail\').hide()\n' +
          '      name = name.replace(\'down\', \'up\')\n' +
          '    } else {\n' +
          '      obj.parents(\'.box\').find(\'.detail\').show()\n' +
          '      name = name.replace(\'up\', \'down\')\n' +
          '    }\n' +
          '    obj.attr(\'class\', name)\n' +
          '    //\t\t\t\tconsole.log(name);\n' +
          '\n' +
          '  })\n' +
          '\n' +
          '  //滑动按钮事件\n' +
          '  $(\'.btn-box img\').click(function () {\n' +
          '    var objbtn = $(this)\n' +
          '    var btns = $(this).attr(\'src\')\n' +
          '    if (btns.indexOf(\'00\') >= 0) {\n' +
          '      //替换其他按钮\n' +
          '      $(\'.btn-box img\').each(function () {\n' +
          '        var str = $(this).attr(\'src\').replace(\'01\', \'00\')\n' +
          '        $(this).attr(\'src\', str) //修改图片路径\n' +
          '      })\n' +
          '      //替换点击按钮\n' +
          '      btns = btns.replace(\'00\', \'01\')\n' +
          '      objbtn.attr(\'src\', btns)\n' +
          '      //切换info\n' +
          '      var divs = btns.replace(\'/Content/newMobileTrace/images/btn_\', \'\').replace(\'01.png\', \'\')\n' +
          '      $(\'.info\').hide()\n' +
          '      $(\'.info-\' + divs).show()\n' +
          '      if (divs == \'lxwm\' || divs == \'zjbg\') {\n' +
          '        var swiper2 = new Swiper(\'#swiper-container2\', {\n' +
          '          pagination: \'#swiper-pagination2\',\n' +
          '          paginationClickable: true,\n' +
          '          spaceBetween: 0,\n' +
          '          centeredSlides: true,\n' +
          '          //\t\t\t\tautoplay: 500,\n' +
          '          autoplayDisableOnInteraction: false\n' +
          '\n' +
          '        })\n' +
          '      }\n' +
          '    }\n' +
          '  })\n' +
          '\n' +
          '  $(\'div[class^=info]:first\').css(\'display\', \'block\')\n' +
          '</script>\n' +
          '</body>\n' +
          '</html>\n'

    },


];
