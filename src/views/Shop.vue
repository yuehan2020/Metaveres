<template>
  <div class="shop">
        <Nav></Nav>
        <el-container>
            <el-header>
                <!-- 快捷导航栏模块 start -->
                <section class="shortcut">
                    <div class="w">
                        <div class="fl">
                            <ul>
                                <li>小涵购欢迎你!&nbsp;</li>
                                <li><a href="#">请登录</a>&nbsp;<a href="register.html" class="style_red">免费注册</a></li>
                            </ul>
                        </div>
                        <div class="fr">
                            <ul>
                                <li>我的订单</li>
                                <li></li>
                                <li class="arrow-icon">我的小涵购<i class="el-icon-arrow-down"></i></li>
                                <li></li>
                                <li>小涵购会员</li>
                                <li></li>
                                <li>企业采购</li>
                                <li></li>
                                <li class="arrow-icon">关注小涵购<i class="el-icon-arrow-down"></i></li>
                                <li></li>
                                <li class="arrow-icon">客户服务<i class="el-icon-arrow-down"></i></li>
                                <li></li>
                                <li class="arrow-icon">网站导航<i class="el-icon-arrow-down"></i></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <!-- 快捷导航栏模块 end -->
                <!-- logo模块 -->
                <div class="logo">
                    <h1>
                        <a href="index.html" title="小涵购商城">小涵购商城</a>
                        <el-button @click="loginOut">退出</el-button>
                    </h1>
                </div>
                <!-- 搜索模块 -->

                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                    <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
                </el-input>

                <!-- hotwords模块制作 -->
                <div class="hotwords">
                    <a href="#" class="style_red">西瓜</a>
                    <a href="#">苹果</a>
                    <a href="#">香蕉</a>
                    <a href="#">葡萄</a>
                    <a href="#">荔枝</a>
                    <a href="#">菠萝</a>
                    <a href="#">桃子</a>
                </div>

                <!-- 购物车模块 -->
                <div class="shopcar"><i class="el-icon-shopping-cart-2"></i> <i class="count">1</i> 我的购物车 <i
                        class="el-icon-arrow-right"> </i> </div>

                <!-- nav模块制作 start -->
                <nav class="nav">
                    <div class="w">
                        <div class="dropdown">
                            <div class="dt">全部商品</div>
                            <div class="dd" v-if="1">
                                <ul>
                                    <li><a href="list.html">jk裙子</a></li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>
                                    <li><a href="#">唱歌</a><span class="cate_menu_line">/</span> <a href="#">么么</a><span
                                            class="cate_menu_line">/</span> <a href="#">讲故事</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="navitems">
                            <ul>
                                <li><a href="#" style="color: #e1251b; font-weight: 700;">秒杀</a></li>
                                <li><a href="#" style="color: #e1251b; font-weight: 700;">优惠券</a></li>
                                <li><a href="#">PLUS会员</a></li>
                                <li><a href="#">品牌闪购</a></li>
                                <li><a href="#">拍卖</a></li>
                                <li><a href="#">家电</a></li>
                                <li><a href="#">超市</a></li>
                                <li><a href="#">生鲜</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- nav模块制作 end -->

                <!-- nav模块 -->

                <!--                     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                        active-text-color="#b1191a">
                        <el-menu-item index="1" text-color="#b1191a">秒杀</el-menu-item>
                        <el-menu-item index="2">优惠券</el-menu-item>
                        <el-menu-item index="3">PLUS会员</el-menu-item>
                        <el-menu-item index="4"><a href="#" target="_blank">品牌闪购</a></el-menu-item>
                        <el-menu-item index="5"><a href="#" target="_blank">拍卖</a></el-menu-item>
                        <el-menu-item index="6"><a href="#" target="_blank">家电</a></el-menu-item>
                    </el-menu> -->

            </el-header>
            <!-- 首页模块 start -->
            <el-main>
                <div class="w">
                    <div class="mainCenter">
                        <div class="focus">
                            <div class="block">
                                <el-carousel height="455px">
                                    <el-carousel-item v-for="(img,index) in mainImage" :key="index">
                                        <h3 class="small"><img :src="mainImage[index]" alt=""></h3>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                        </div>
                        <el-card class="box-card">
                            <div  class="clearfix">
                                <span>小涵快报</span>
                                <el-button class="more" style="float: right; padding: 3px 0;color: #999;" type="text">更多
                                    <i class="el-icon-arrow-right"></i>
                                </el-button>
                            </div>
                            <div v-for=" (k,index) in kuaibao " :key="index" class="text item">
                                <a href="#">{{ kuaibao[index] }}</a>
                            </div>
                        </el-card>

                         <div class="lifeservice">
                            <div class="smallNav">
                                <div class="Nav-item1">
                                    <a href="#">
                                        <span class="icon1"></span>
                                        <span>苹果</span>
                                    </a>
                                </div>
                                <div class="Nav-item1">
                                    <a href="#">
                                        <span class="icon1"></span>
                                        <span>苹果</span>
                                    </a>
                                </div>
                                <div class="Nav-item1">
                                    <a href="#">
                                        <span class="icon1"></span>
                                        <span>苹果</span>
                                    </a>
                                </div>
                            </div>
                            <div class="smallNav">
                                <div class="Nav-item1">
                                    <a href="#">
                                        <span class="icon2"></span>
                                        <span>西瓜</span>
                                    </a>
                                </div>
                                <div class="Nav-item1">
                                    <a href="#">
                                        <span class="icon2"></span>
                                        <span>香蕉</span>
                                    </a>
                                </div>
                                <div class="Nav-item1">
                                    <a href="#">
                                        <span class="icon2"></span>
                                        <span>葡萄</span>
                                    </a>
                                </div>
                            </div>
                            <div class="smallNav">
                                <div class="Nav-item1">
                                    <a href="#">
                                        <span class="icon3"></span>
                                        <span>菠萝</span>
                                    </a>
                                </div>
                                <div class="Nav-item1">
                                    <a href="#">
                                        <span class="icon3"></span>
                                        <span>芒果</span>
                                    </a>
                                </div>
                                <div class="Nav-item1">
                                    <a href="#">
                                        <span class="icon3"></span>
                                        <span>荔枝</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <!-- 推荐模块 -->
                    </div>
                </div>

                <!-- 小涵秒杀模块 -->
                <div class="w recom">
                    <div class="recom_hd">
                        <div class="miaosha">小涵秒杀</div>
                    </div>
                    <div class="recom_bd">
                        <div class="bd_item">
                            <div class="bd_item1"><img src="https://img2.baidu.com/it/u=1758349533,2525296106&fm=26&fmt=auto" alt=""></div>
                            <div class="bd_item1">
                                <h6>炒鸡无敌酷炫小鸡腿</h6>
                            </div>
                            <div class="bd_item1 price">
                                <span class="miaosha-price">
                                    <i>¥</i>
                                    <span>1.00</span>
                                </span>
                            </div>
                        </div>
                        <div class="bd_item">
                            <div class="bd_item1"><img src="https://img2.baidu.com/it/u=1758349533,2525296106&fm=26&fmt=auto" alt=""></div>
                            <div class="bd_item1">
                                <h6>炒鸡无敌酷炫小鸡腿</h6>
                            </div>
                            <div class="bd_item1 price">
                                <span class="miaosha-price">
                                    <i>¥</i>
                                    <span>1.00</span>
                                </span>
                            </div>
                        </div>
                        <div class="bd_item">
                            <div class="bd_item1"><img src="https://img2.baidu.com/it/u=1758349533,2525296106&fm=26&fmt=auto" alt=""></div>
                            <div class="bd_item1">
                                <h6>炒鸡无敌酷炫小鸡腿</h6>
                            </div>
                            <div class="bd_item1 price">
                                <span class="miaosha-price">
                                    <i>¥</i>
                                    <span>1.00</span>
                                </span>
                            </div>
                        </div>
                        <div class="bd_item">
                            <div class="bd_item1"><img src="https://img2.baidu.com/it/u=1758349533,2525296106&fm=26&fmt=auto" alt=""></div>
                            <div class="bd_item1">
                                <h6>炒鸡无敌酷炫小鸡腿</h6>
                            </div>
                            <div class="bd_item1 price">
                                <span class="miaosha-price">
                                    <i>¥</i>
                                    <span>1.00</span>
                                </span>
                            </div>
                        </div>
                        <div class="bd_item">
                            <div class="bd_item1"><img src="https://img2.baidu.com/it/u=1758349533,2525296106&fm=26&fmt=auto" alt=""></div>
                            <div class="bd_item1">
                                <h6>炒鸡无敌酷炫小鸡腿</h6>
                            </div>
                            <div class="bd_item1 price">
                                <span class="miaosha-price">
                                    <i>¥</i>
                                    <span>1.00</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 楼城区制作 start -->
                <div class="floor">
                    <!-- 1楼小涵优选楼层 -->
                    <div class="w youxuan">
                        <div class="box_hd">
                            <h3>每日特价</h3>
                            <div class="tab_list">
                                <ul>
                                    <li><a href="#" class="style_red">精选</a></li>
                                    <li><a href="#">美食</a></li>
                                    <li><a href="#">百货</a></li>
                                    <li><a href="#">个护</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="box_bd">
                            <div class="table_content">
                                <div class="tab_list_item">
                                    <div class="tab_list_item1">
                                        <ul class="box1">
                                            <li><a href="#">节能补贴</a></li>
                                            <li><a href="#">节能补贴</a></li>
                                            <li><a href="#">节能补贴</a></li>
                                            <li><a href="#">节能补贴</a></li>
                                            <li><a href="#">节能补贴</a></li>
                                            <li><a href="#">节能补贴</a></li>
                                        </ul>
                                        <a href="#">
                                            <img src="http://img14.360buyimg.com/mobilecms/s150x150_jfs/t1/89455/38/3556/44448/5de0da41Ea6818d66/d4cc84f9da9a19e0.jpg!q70.jpg.webp" alt="">
                                        </a>
                                    </div>
                                    <div class="tab_list_item2">
                                        <a href="#"><img src="http://img10.360buyimg.com/babel/s290x370_jfs/t1/133621/19/17467/111378/5fbf8318E6ccf4818/c5e52bf95e7c3850.jpg!cc_290x370.webp" alt=""></a>
                                    </div>
                                    <div class="tab_list_item3">
                                        <a href="#" class="bb"><img src="http://img13.360buyimg.com/babel/s290x370_jfs/t1/163303/19/8612/240967/603f2afdE54fac7e9/6270a3dfba2f1847.jpg!cc_290x370.webp" alt=""></a>
                                        <a href="#"><img src="http://img20.360buyimg.com/ceco/s150x150_jfs/t1/188900/23/12252/41567/60e6d922E1a808b7e/c1230812d90bbec6.jpg!q70.jpg.webp" alt=""></a>

                                    </div>
                                    <div class="tab_list_item4">
                                        <a href="#"><img src="http://img11.360buyimg.com/babel/s290x370_jfs/t1/168303/35/8655/261408/603db12dE885ad355/b7b88defb9b6d0e5.jpg!q95!cc_290x370.webp" alt=""></a>

                                    </div>
                                    <div class="tab_list_item5">
                                        <a href="#" class="bb"><img src="http://img20.360buyimg.com/ceco/s150x150_jfs/t1/184908/31/12132/60843/60ddb278Ee23ad1f7/9fabb5bee2c52e18.jpg!q70.jpg.webp" alt=""></a>
                                        <a href="#"><img src="http://img11.360buyimg.com/ceco/s300x300_jfs/t1/118819/39/2554/347463/5ea28d06E566fc45f/430d2dad797c0c5e.png" alt=""></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2楼小涵广场 -->
                    <div class="w guangchang">
                        <div class="box_hd">
                            <h3>小涵广场</h3>
                            <div class="tab_list">
                                <ul>
                                    <li><a href="#" class="style_red">精选</a></li>
                                    <li><a href="#">美食</a></li>
                                    <li><a href="#">百货</a></li>
                                    <li><a href="#">个护</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="box_bd">
                            <div class="table_content">
                                <div class="tab_list_item">
                                    <div class="tab_list_item1">
                                        <ul class="box1">
                                            <li><a href="#">节能补贴</a></li>
                                            <li><a href="#">节能补贴</a></li>
                                            <li><a href="#">节能补贴</a></li>
                                            <li><a href="#">节能补贴</a></li>
                                            <li><a href="#">节能补贴</a></li>
                                            <li><a href="#">节能补贴</a></li>
                                        </ul>
                                        <a href="#">
                                            <img src="http://img14.360buyimg.com/mobilecms/s150x150_jfs/t1/89455/38/3556/44448/5de0da41Ea6818d66/d4cc84f9da9a19e0.jpg!q70.jpg.webp" alt="">
                                        </a>
                                    </div>
                                    <div class="tab_list_item2">
                                        <a href="#"><img src="http://img10.360buyimg.com/babel/s290x370_jfs/t1/133621/19/17467/111378/5fbf8318E6ccf4818/c5e52bf95e7c3850.jpg!cc_290x370.webp" alt=""></a>
                                    </div>
                                    <div class="tab_list_item3">
                                        <a href="#" class="bb"><img src="http://img13.360buyimg.com/babel/s290x370_jfs/t1/163303/19/8612/240967/603f2afdE54fac7e9/6270a3dfba2f1847.jpg!cc_290x370.webp" alt=""></a>
                                        <a href="#"><img src="http://img20.360buyimg.com/ceco/s150x150_jfs/t1/188900/23/12252/41567/60e6d922E1a808b7e/c1230812d90bbec6.jpg!q70.jpg.webp" alt=""></a>

                                    </div>
                                    <div class="tab_list_item4">
                                        <a href="#"><img src="http://img11.360buyimg.com/babel/s290x370_jfs/t1/168303/35/8655/261408/603db12dE885ad355/b7b88defb9b6d0e5.jpg!q95!cc_290x370.webp" alt=""></a>

                                    </div>
                                    <div class="tab_list_item5">
                                        <a href="#" class="bb"><img src="http://img20.360buyimg.com/ceco/s150x150_jfs/t1/184908/31/12132/60843/60ddb278Ee23ad1f7/9fabb5bee2c52e18.jpg!q70.jpg.webp" alt=""></a>
                                        <a href="#"><img src="http://img11.360buyimg.com/ceco/s300x300_jfs/t1/118819/39/2554/347463/5ea28d06E566fc45f/430d2dad797c0c5e.png" alt=""></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- 楼城区制作 end -->

            </el-main>
            <!-- 首页模块 end -->

            <!-- 底部模块 start -->
            <el-footer height="415px">
                <div class="w">
                    <div class="mod_service">
                        <ul>
                            <li>
                                <h5></h5>
                                <div class="ervice_txt">
                                    <h4>种类齐全</h4>
                                    <p>正品保障</p>
                                </div>
                            </li>
                            <li>
                                <h5 class="kuai"></h5>
                                <div class="ervice_txt">
                                    <h4>快的很</h4>
                                    <p>三年必到</p>

                                </div>
                            </li>
                            <li>
                                <h5 class="hao"></h5>
                                <div class="ervice_txt">
                                    <h4>质量很好</h4>
                                    <p>放心使用</p>

                                </div>
                            </li>
                            <li>
                                <h5 class="sheng"></h5>
                                <div class="ervice_txt">
                                    <h4>便宜的很</h4>
                                    <p>可以省钱</p>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="mod_help">
                        <dl>
                            <dt>服务指南</dt>
                            <dd><a href="#">会员介绍 </a></dd>
                            <dd><a href="#">生活旅行 </a></dd>
                            <dd><a href="#">常见问题 </a></dd>
                            <dd><a href="#">联系客服 </a></dd>
                        </dl>
                        <dl>
                            <dt>服务指南</dt>
                            <dd><a href="#">会员介绍 </a></dd>
                            <dd><a href="#">生活旅行 </a></dd>
                            <dd><a href="#">常见问题 </a></dd>
                            <dd><a href="#">联系客服 </a></dd>
                        </dl>
                        <dl>
                            <dt>服务指南</dt>
                            <dd><a href="#">会员介绍 </a></dd>
                            <dd><a href="#">生活旅行 </a></dd>
                            <dd><a href="#">常见问题 </a></dd>
                            <dd><a href="#">联系客服 </a></dd>
                        </dl>
                        <dl>
                            <dt>服务指南</dt>
                            <dd><a href="#">会员介绍 </a></dd>
                            <dd><a href="#">生活旅行 </a></dd>
                            <dd><a href="#">常见问题 </a></dd>
                            <dd><a href="#">联系客服 </a></dd>
                        </dl>
                        <dl>
                            <dt>服务指南</dt>
                            <dd><a href="#">会员介绍 </a></dd>
                            <dd><a href="#">生活旅行 </a></dd>
                            <dd><a href="#">常见问题 </a></dd>
                            <dd><a href="#">联系客服 </a></dd>
                        </dl>
                        <dl>
                            <dt>帮助中心</dt>
                            <dd class="bangzhu"></dd>
                            <dd> 小涵商城</dd>

                        </dl>
                    </div>
                    <div class="mod_copyright">
                        <div class="links">
                            <a href="#">关于我们</a> <span>|</span>
                            <a href="#">联系我们</a> <span>|</span>
                            <a href="#">联系客服</a> <span>|</span>
                            <a href="#">合作招商</a> <span>|</span>
                            <a href="#">商家帮助</a> <span>|</span>
                            <a href="#">营销中心</a> <span>|</span>
                            <a href="#">手机</a> <span>|</span>
                            <a href="#">友情链接</a> <span>|</span>
                            <a href="#">销售联盟</a> <span>|</span>
                            <a href="#">社区</a> <span>|</span>
                            <a href="#">风险监测</a> <span>|</span>
                            <a href="#">隐私政策</a> <span>|</span>

                        </div>
                        <div class="copyright">
                            地址：xxx 邮编：xxx 电话：xxx 传真：xxx 邮箱： xxx
                            备号：xxx
                        </div>
                    </div>
                </div>

            </el-footer>
            <!-- 底部模块 end -->

        </el-container>
  </div>
</template>

<script>

import Nav from '../components/Nav.vue'
export default {
  name: 'Shop',
  data: function () {
    return {
      name: 'xiba',
      input3: '',
      activeIndex: '1',
      kuaibao: [
        '[热门] 别人笑我太疯癫',
        '我笑他人看不穿',
        '不见五陵豪杰墓',
        '无花无酒锄做田'
      ],
      mainImage: [
        'https://img2.baidu.com/it/u=2402502061,3875845275&fm=26&fmt=auto',
        'https://gimg2.baidu.com/image_search/src=http://i0.hdslb.com/bfs/article/6af6f2af9ae88423f785208eec14336031f7b2ca.jpg&refer=http://i0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639664166&t=ba179720e9fae955afa566f150e8d624',
        'https://img2.baidu.com/it/u=4127420155,1998691746&fm=26&fmt=auto',
        'https://img1.baidu.com/it/u=3501172958,1614572876&fm=26&fmt=auto'
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    // 退出功能
    loginOut () {
      console.log('退出了')
      this.$router.push('/')
    }
  },
  components: { Nav }
}
</script>

<style lang="less" scoped>
li {
    list-style: none;
}
/* 版心 */
.w {
    width: 1200px;
    margin: 0 auto;
}

.fl {
    float: left;
}
.fr {
    float: right;

}
.style_red {
    color: #c81623;
}
/* 快捷导航栏 */
.shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;
}

.shortcut ul li {
    float: left;
}

/* 选择所有偶数小li */
.shortcut .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0;

}

.shortcut .el-icon-arrow-down {
    margin-left: 6px;

}

/* header 头部制作 */
.header {
    position: relative;
    height: 200px;

}
.logo {
    position: absolute;
    top: 70px;
    width: 171px;
    height: 61px;

}

.logo a {
    display: block;
    width: 171px;
    height: 61px;
    // background: url(../images/logo.png) no-repeat;
    background-size: 171px 61px;
    font-size: 0;
}

.el-input {
    position: absolute;
    left: 346px;
    top: 90px;
    width: 538px;
    height: 36px;
    border: 2px solid #b1191a;

}

.el-input__inner {
    border: 0;
    outline: none;
}

.hotwords {
    position: absolute;
    top: 140px;
    left: 346px;
}
.hotwords a {
    margin: 0 10px;
}

.shopcar{
    position: absolute;
    right: 60px;
    top: 90px;
    width: 140px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #dfdfdf;
    background-color: #f7f7f7;
}

.el-icon-shopping-cart-2 {

    color: #b1191a;
}

.count {
    position: absolute;
    top: -5px;
    left: 20px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    background-color: #e60012;
    padding: 0 5px;
    border-radius: 7px;
}

.nav {
    width: 1200px;
    height: 47px;
    margin-top: 140px;
    border-bottom: 2px solid #b1191a ;
}

.nav .dropdown {
    float: left;
    width: 190px;
    height: 45px;
    background-color: #b1191a;
}
.nav .navitems {
    float: left;
}

.dropdown .dt {
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
}

.dropdown .dd {
    width: 190px;
    height: 465px;
    background-color: #c81623;
    color: #fff;
    margin-top: 2px;

}

.dropdown .dd ul li {
    height: 31px;
    line-height: 31px;
    margin-left: 2px;
    padding-left: 10px;
}

.dropdown .dd ul li:hover {
    background-color: rgb(217,217,217);
    transition: .2s ease;
}

.dropdown .dd ul li a {
    font-size: 14px;
    color: #fff;
}

.dropdown .dd ul li a:hover {
    color: #c81623;
}

.cate_menu_line {
    padding: 0 2px;
    font-size: 12px;
}

.navitems ul li {
    float: left;
}
.navitems ul li a{
    display: block;
    height: 45px;
    line-height: 45px;
    padding: 0 25px;

}
.navitems ul li a:hover {
    color: #c81623;
}

.el-menu {
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 2px solid #b1191a !important;
    height: 47px;
}

.el-header {
    position: relative;
    height: 200px !important;
    width: 1200px;
    margin: 0 auto;
}

/* 底部模块 */
.el-footer {
    background-color: #f5f5f5;
    padding-top: 30px;
}

.mod_service {
    height: 80px;
    border-bottom: 1px solid #ccc;
}

.mod_service ul li {
    float: left;
    width: 300px;
    height: 50px;
    padding-left: 35px;
}
.mod_service ul li h5 {
    float: left;
    width: 36px;
    height: 42px;
    // background:url(../images/xiaohangou.png) no-repeat 0 -192px;
    margin-right: 8px;
}
.mod_service .kuai {
    // background:url(../images/xiaohangou.png) no-repeat -41px -192px;

}
.mod_service .hao {
    // background:url(../images/xiaohangou.png) no-repeat -82px -192px;

}
.mod_service .sheng {
    // background:url(../images/xiaohangou.png) no-repeat -123px -192px;

}

.service_txt  h4{
    font-size: 14px;
    font-weight: 700;
    color: #444;
    white-space: nowrap;
}

.mod_help{
    height: 185px;
    border-bottom: 1px solid #ccc;
    padding-top: 20px;
    padding-left: 50px;
}
.mod_help dl {
    float: left;
    width: 200px;
}

.mod_help dl:last-child {
    width: 90px;
    text-align: center;
}
.mod_help dl dt {
    font-size: 16px;
    margin-bottom: 10px;

}

.bangzhu {
    width: 90px;
    height: 90px;
    // background: url(../images/logo.png);
    background-size: 90px 90px;
}

.mod_copyright {
    text-align: center;
    padding-top: 20px;
}

.links {
    margin-bottom: 15px;
}

.copyright {
    line-height: 20px;
}

.links span {
    padding: 0 5px;
}

.links a {
    margin: 0 3px;
}
.links a:hover {
    color: #c81623;
}

a:hover {
    color: #c81623;
}

/* 所有标签内外边距清零 */
* {
    margin: 0;
    padding: 0;
    /* css3盒子模型 */
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
}

/* em和i斜体文字不倾斜 */
em,
i {
    font-style: normal;
}

a {
    text-decoration: none;
    color: #000;
}

button,
input {
    /* 去掉默认灰色边框 */
    border: 0;
    outline: none;
}

ul li {
    list-style: none;
}

.mainCenter {
    width: 980px;
    height: 455px;

    margin-left: 220px;
    margin-top: 10px;
}

.focus {
    float: left;
    width: 721px;
    height: 455px;

}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .small img {
      width: 721px;
      height: 455px;
  }

  .text {
    font-size: 12px;
    color: #666;
  }
  .text a:hover {
      color: #c81623;

  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    float: right;
    width: 250px;
    height: 230px;

  }

  .el-card__header{
      height: 60px;
      font-size: 14px;
      font-weight: 700;

  }

  .more:hover {
      color: #c81623 !important;
  }

  .lifeservice {
      margin-top: 5px;
      float: right;
      display: flex;
      flex-direction: column;
      height: 209px;
      width: 250px;
      border: 1px solid #EBEEF5;
      background-color: #FFF;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }

  .smallNav {
      flex: 1;
      display: flex;
      height: 71px;
  }

  .icon1 {
      width: 28px;
      height: 28px;
      margin-top: 8px;
      background: url(http://m.360buyimg.com/babel/jfs/t1/32403/22/14829/3699/5cbf0674E04723693/caa83ce9b881cd24.png) no-repeat;
      background-size: 28px auto;
  }

  .icon2 {
    width: 28px;
    height: 28px;
    margin-top: 8px;
    background: url(http://m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png) no-repeat;
    background-size: 28px auto;
}

    .icon3 {
        width: 28px;
        height: 28px;
        margin-top: 8px;
        background: url(http://m.360buyimg.com/babel/jfs/t1/36478/38/5384/2901/5cbf065aEb0c60a12/afb4399323fe3b76.png) no-repeat;
        background-size: 28px auto;

    }

  .Nav-item1 {
      flex: 1;
      display: flex;
      width: 63px;
  }
  .Nav-item1 a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
}

.recom {
  height: 260px;
  margin-top: 12px;
}

.recom_hd {
  float: left;
  height: 260px;
  width: 190px;
  background: url(https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/img/4a15d8883775742e3efbb850ae14def7.png) no-repeat;
  background-size: 190px 260px;
}
.miaosha {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-top: 31px;
  color: #fff;
}

.recom_bd {
  float: left;
  display: flex;
}

.bd_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 260px;
  /* border-right: 1px solid #eee; */
}

.bd_item:nth-child(-n+4) {
  border-right: 1px solid #eee;

}
.bd_item1 {
  flex: 1;
}
.bd_item img {
    width: 140px;
    height: 140px;
    margin-top: 30px;

}

.bd_item1 h6 {
    font-size: 12px;
    font-weight: 400;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 13px;
}

.price {
  width: 160px;
  height: 24px;
  margin-top: 7px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;

}
.miaosha-price{
  display: block;
  width: 160px;
  height: 22px;
  border: 1px solid #e1251b;
  background-color: #e1251b;

}
.miaosha-price i {
  font-size: 12px;
  font-weight: 400;
  padding-right: 2px;
}

/* 优选模块 */
.box_hd {
  height: 30px;
  border-bottom: 2px solid #c81623;
}
.box_hd h3 {
  float: left;
  font-weight: 700;
  font-size: 24px;
  color: #333;
  line-height: 20px;
}

.tab_list {
  float: right;
  line-height: 30px;
}

.tab_list ul li {
  float: left;
  cursor: pointer;
  font-size: 14px;
  color: #999;
  font-family: Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
}

.tab_list ul li a {
  margin: 0 15px;
}

.floor .w {
  margin-top: 30px;
}

.box_bd {
  height: 361px;
}

.tab_list_item {
  display: flex;
}
.tab_list_item1 {
  flex: 2;
  height: 361px;
  background-color: #f9f9f9;
  text-align: center;
}
.tab_list_item2 {
  flex:3;
}
.tab_list_item3 {
  flex:2;
}
.tab_list_item4 {
  flex:2;
  border-right: 1px solid #ccc;
}
.tab_list_item5 {
  flex:2;
}

.box1 {
  padding-left: 18px;
}
.box1 li {
  float: left;
  width: 85px;
  height: 34px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 33px;
  margin-right: 10px;

}
.tab_list_item1 a img {
  width: 215px;
  height: 260px;
}

.tab_list_item2 a img {
  width: 327px;
  height: 365px;
}
.tab_list_item3 a img {
  width: 218px;
  height: 178px;
}

.tab_list_item4 a img {
  width: 218px;
  height: 361px;

}

.tab_list_item5 a img {
  width: 218px;
  height: 178px;
}

.bb {
  display: block;
  border-bottom: 1px solid #ccc;
}
</style>
