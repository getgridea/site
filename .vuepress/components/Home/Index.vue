<template>
  <div class="home-page">
    <div class="hero-container">
      <!-- <l-alert color="#5f3dc4" closable v-show="!close" @close="closeHandler">
        <div class="alert-content">🤫新版即将到来，全新体验，助你妙笔生花，敬请期待！预计发布日期：2019-9-23</div>
        <template v-slot:close>
          <l-button size="small">关闭</l-button>
        </template>
      </l-alert> -->
      <css-doodle class="hero-bg">
        :doodle {
        @grid: 24 / 120vmax;
        background: #f9d654;
        font-family: sans-serif;
        }
        :after {
        content: \@hex(@rand(0x2500, 0x257f));
        color: rgba(67, 67, 67, 0.16);
        font-size: 2vmax;
        }
      </css-doodle>
      <div class="hero-content">
        <div class="left">
          <main class="hero-title">
            <h1 data-splitting class="headline headline--hide">Gridea</h1>
          </main>
          <div>
            <div class="slogon">一个静态博客写作客户端</div>
          </div>
          <div class="description">记录生活、心情、知识、笔记、创意...</div>
          <div class="btn-container">
            <l-tooltip placement="bottom" content="Mac OS" style="margin-right: 24px;">
              <l-button
                size="large"
                shape="circle"
                @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea-${version}.dmg`)"
              ><i class="ri-mac-line"></i></l-button>
            </l-tooltip>
            <l-tooltip placement="bottom" content="Windows" style="margin-right: 24px;">
              <l-button
                size="large"
                shape="circle"
                @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea.Setup.${version}.exe`)"
              ><i class="ri-windows-line"></i></l-button>
            </l-tooltip>
            <l-tooltip placement="bottom" content="Linux">
              <l-button
                size="large"
                shape="circle"
                @click="goPage(`https://github.com/getgridea/gridea/releases`)"
              ><i class="ri-ubuntu-line"></i></l-button>
            </l-tooltip>
          </div>
          <div class="star">
            <gh-btns-star slug="getgridea/gridea" show-count></gh-btns-star>
            <span class="star-tip"> 🌟Star 支持作者！</span>
          </div>
          <div class="shields-container">
            <a href="https://github.com/getgridea/gridea/releases/latest">
              <img
                src="https://img.shields.io/github/release/getgridea/gridea.svg?style=flat-square"
                alt
              />
            </a>

            <a href="https://github.com/getgridea/gridea/blob/master/LICENSE">
              <img
                src="https://img.shields.io/github/license/getgridea/gridea.svg?style=flat-square"
                alt
              />
            </a>

            <a href="https://github.com/getgridea/gridea/releases/latest">
              <img
                alt="GitHub All Releases"
                src="https://img.shields.io/github/downloads/getgridea/gridea/total.svg?color=%2312b886&style=flat-square"
              />
            </a>
          </div>
        </div>
        <div class="right">
          <img
            src="https://raw.githubusercontent.com/getgridea/gridea/master/gridea-app.png"
            alt="Gridea"
            class="app-img"
          />
        </div>
      </div>
    </div>
    <div class="container-wrapper">
      <div class="container">
        <h2 class="section-title">你最需要的，我们都准备了</h2>
        <div class="item-container">
          <div class="item" v-for="(item, index) in featureList" :key="index">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-wrapper white">
      <div class="container">
        <h2 class="section-title">内置主题</h2>
        <img class="theme-img" src="/themes.png" alt />
      </div>
    </div>
    <div class="container-wrapper">
      <div class="container">
        <h2 class="section-title">哪些朋友在使用</h2>
        <div class="user-list">
          <div v-for="user in userList" class="user-item">
            <a :href="user.link" target="_blank">
              <img class="avatar" :src="user.avatar" alt="">
              <h3 class="username">{{ user.username }}</h3>
            </a>
          </div>
        </div>
        <div style="text-align: center;">
          <a href="https://github.com/getgridea/gridea/issues/126" target="_blank">提交我的博客</a>
        </div>
      </div>
    </div>
    <div class="container-wrapper white">
      <div class="container">
        <h2 class="section-title">不止这些</h2>
        <div
          class="content-container"
        >除了这些，还有一些你可能期待的（主题包含）：KaTeX 公式、Google Analytics、社交链接、TOC...，心动了吗？快快下载体验吧！</div>
        <div class="action-container">
          <l-tooltip placement="bottom" content="Mac OS" style="margin-right: 24px;">
            <l-button
              size="large"
              shape="circle"
              style="background:"
              @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea-${version}.dmg`)"
            ><i class="ri-mac-line"></i></l-button>
          </l-tooltip>
          <l-tooltip placement="bottom" content="Windows" style="margin-right: 24px;">
            <l-button
              size="large"
              shape="circle"
              @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea.Setup.${version}.exe`)"
            ><i class="ri-windows-line"></i></l-button>
          </l-tooltip>
          <l-tooltip placement="bottom" content="Linux">
            <l-button
              size="large"
              shape="circle"
              @click="goPage(`https://github.com/getgridea/gridea/releases`)"
            ><i class="ri-ubuntu-line"></i></l-button>
          </l-tooltip>
        </div>
        <div class="star-container">
          <div class="star-tip">🌟Star，支持作者！👇</div>
          <gh-btns-star slug="getgridea/gridea" show-count></gh-btns-star>
        </div>
        <div class="star-container">
          <div class="star-tip">💰赞赏，助力作者！👇</div>
          <img src="https://raw.githubusercontent.com/getgridea/gridea/master/files/wechat.png" width="160px" style="border-radius: 16px;" />
          <div style="text-align: center; margin-top: 16px;">
            <a href="https://github.com/getgridea/gridea/issues/126" target="_blank">赞赏列表</a>
          </div>
        </div>
      </div>
    </div>
    <div class="home-content container-wrapper">
      <p>
        <span class="large-icon">🌱</span> 当然 Gridea 还很年轻，有很多不足，但请相信，它会不停向前
        <span class="large-icon">🏃</span>
      </p>
      <p>未来，它一定会成为你离不开的伙伴</p>
      <p>尽情发挥你的才华吧！</p>
      <p>😘 𝖤𝗇𝗃𝗈𝗒~</p>
      <a href="https://t.me/joinchat/AAAAAEj82_lma0Y1wmyqUQ" target="_blank">Telegram 频道</a> |
      <a href="https://t.me/joinchat/IDY0ahRqb8NPodv95BNpBg" target="_blank">Telegram 群组</a>
      <l-button type="text">QQ 1 群：970332209 (已满)</l-button>
      <l-button type="text">QQ 2 群：923131213</l-button>
      <div style="text-align: center; padding: 24px 8px;">
        <a
          href="https://www.producthunt.com/posts/gridea?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gridea"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=161420&theme=light"
            alt="Gridea - A static blog writing client | Product Hunt Embed"
            style="width: 250px; height: 54px;"
            width="250px"
            height="54px"
          />
        </a>
      </div>
      <div class="shields-container">
        <a href="https://github.com/getgridea/gridea/releases/latest">
          <img
            src="https://img.shields.io/github/release/getgridea/gridea.svg?style=flat-square"
            alt
          />
        </a>

        <a href="https://github.com/getgridea/gridea/blob/master/LICENSE">
          <img
            src="https://img.shields.io/github/license/getgridea/gridea.svg?style=flat-square"
            alt
          />
        </a>

        <a href="https://github.com/getgridea/gridea/releases/latest">
          <img
            alt="GitHub All Releases"
            src="https://img.shields.io/github/downloads/getgridea/gridea/total.svg?color=%2312b886&style=flat-square"
          />
        </a>
      </div>
      <form
        class="subscribe-form"
        action="https://tinyletter.com/gridea"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/gridea', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        <p>
          <label class="subscribe-label" for="tlemail">✉️订阅更新</label>
        </p>
        <div class="live-input-container subscribe-input">
          <input class="live-input" placeholder="邮箱" type="text" name="email" id="tlemail" />
        </div>
        <input type="hidden" value="1" name="embed"/>
        <input class="live-btn live-btn-primary subscribe-button" type="submit" value="订阅" />
      </form>
    </div>
    <footer>
      <css-doodle class="footer-bg">
        :doodle {
        @grid: 6 / 100%;
        }
        @size: .8em;
        background: hsla(calc(10 * @index()), 60%, 60%, .2);
        clip-path: polygon( 50% 0, 100% 100%, 0 100%);
        transform:
        rotate(@rand(360deg))
        scale(@rand(.6, 1, .1))
        translate(
        @rand(-10em, 10em),
        @rand(-10em, 10em)
        )
      </css-doodle>
      Made with ❤️ by
      <a href="https://github.com/EryouHao" target="_blank">EryouHao</a> | Twitter: <a href="https://twitter.com/EryouHao" target="_blank">@EryouHao</a> | Weibo: <a href="https://weibo.com/u/3799576961" target="_blank">海岛心hey</a>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
// import Splitting from "splitting";

// Splitting();

// import 'css-doodle'

export default {
  data() {
    return {
      stars: 0,
      version: "",
      featureList: [
        {
          title: "Markdown",
          desc: "使用最酷的 Markdown 进行创作，专注内容，其他的交给 Gridea"
        },
        {
          title: "封面图",
          desc: "快去挑选一张漂亮的封面图，为文章添彩，外链图也没问题哦"
        },
        {
          title: "自定义标签",
          desc:
            "用标签来为文章进行归类，以你喜欢的方式：编程、旅行、读书笔记...，化繁为简、不必纠结"
        },
        {
          title: "自定义菜单",
          desc:
            "我们提供了自定义菜单功能，同时贴心地准备了主页、归档和标签列表快捷选择。当然，你也可以创建外部菜单到任何地方"
        },
        {
          title: "跨设备",
          desc:
            "或许你工作使用 Mac，生活使用 Windows，又或许你是使用 Linux 的极客，这都不是事儿，Gridea 全都支持！同时支持更改源文件夹，利用 OneDrive、Dropbox 等同步工具，跨设备管理博客轻而易举！"
        },
        {
          title: "多平台",
          desc:
            "大部分情况下你用 Github Pages 来托管博客就够了，但我们同时提供了 Coding Pages 的支持"
        },
        {
          title: "多评论",
          desc:
            "Gridea 内置了 Gitalk 和 DisqusJS 两个评论系统，你可以任选其一，利用评论结交更多朋友吧！"
        },
        {
          title: "多主题",
          desc:
            "我们目前提供了 4 款内置主题，总有一款会获得你的芳心，更有趣的是，我们为每款主题提供了丰富的自定义配置，稍加配置，遇见大不同"
        },
        {
          title: "多语言",
          desc: "是的，我们贴心地为您内置了中文简体和 English 两种语言"
        },
        {
          title: "RSS",
          desc: "RSS 也是一个不错的信息订阅方式"
        }
      ],
      userList: [
        {
          link: 'https://www.y3pm.com/',
          avatar: 'https://www.y3pm.com/images/avatar.png',
          username: 'Y3.PM',
        },
        {
          link: 'https://chiahsien.github.io/',
          avatar: 'https://chiahsien.github.io/images/avatar.png',
          username: 'Nelson',
        },
        {
          link: 'https://zhangajian.com/',
          avatar: 'https://zhangajian.com/media/images/avatar.png',
          username: '张阿简博客',
        },
        {
          link: 'https://shanbu.fun/',
          avatar: 'https://i.loli.net/2019/09/28/IGFY8Ug5Pft9hWX.jpg',
          username: '山卜方',
        },
        {
          link: 'https://www.aliyaowan.com/',
          avatar: 'https://www.aliyaowan.com/images/avatar.png',
          username: '啊哩药丸',
        },
        {
          link: 'https://qinjinhuan.github.io/',
          avatar: 'https://qinjinhuan.github.io/images/avatar.png',
          username: '黄粱一梦',
        },
        {
          link: 'https://jiaoluo.co/',
          avatar: 'https://s2.ax1x.com/2019/09/20/nOyAts.jpg',
          username: '彼岸临窗',
        },
        {
          link: 'https://kveln.cn/',
          avatar: 'https://kveln.cn/favicon.ico',
          username: 'Kveln\'Blog',
        },
        {
          link: 'https://chenmei.xyz/',
          avatar: 'https://chenmei.xyz/images/avatar.png',
          username: '呆呆是槑',
        },
        {
          link: 'https://moyu.life/',
          avatar: 'https://brick713.github.io/images/avatar.png',
          username: 'Brick713 的小黑屋',
        },
        {
          link: 'https://thegayhub.github.io/',
          avatar: 'https://TheGayhub.github.io/images/avatar.png',
          username: 'Guapi',
        },
        {
          link: 'https://blog.ixiao9.com/',
          avatar: 'https://ixiao9.github.io/images/avatar.png',
          username: 'iXiAo9',
        },
      ],
      close: true,
    };
  },
  created() {
    this.fetchStars();
    this.fetchVersion();
  },
  mounted() {
    const close = localStorage.getItem('gridea_update_close')
    this.close = !!close
    // if (window.Splitting) {
    //   window.Splitting()
    // }
    Splitting()
  },
  methods: {
    goPage(url) {
      window.open(url, "_blank");
    },
    fetchStars() {
      axios.get("https://api.github.com/repos/getgridea/gridea").then(res => {
        this.stars = res.data.stargazers_count;
      });
    },
    async fetchVersion() {
      // const res = await axios.get('https://api.github.com/repos/getgridea/gridea/releases/latest')
      // if (res.status === 200) {
      //   this.version = res.data.name.substring(1)
      // }
      this.version = "0.8.3";
    },
    closeHandler() {
      localStorage.setItem('gridea_update_close', true)
    },
  }
};
</script>

<style lang="stylus" scoped>
.home-page {
  .description {
    padding: 16px 0 32px;
  }

  .action-container {
    text-align: center;

    .live-btn-large {
      margin-bottom: 8px;
      background: #f9d654;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
      color: #000000;
      transition: all 0.382s;

      &:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
        transform: translateY(-4px);
      }
    }
  }

  .home-content {
    text-align: center;
    padding-bottom: 32px;

    .large-icon {
      font-size: 28px;
    }
  }

  .star-container {
    padding-top: 16px;
    text-align: center;

    .star-tip {
      padding: 16px 0;
      font-weight: bold;
    }
  }

  .shields-container {
    padding: 24px 0;
  }

  >>> .gh-button-container {
    float: none;
    margin: 0;
  }

  // >>> .live-btn {
  //  border-radius: 8px;
  // }
}

.hero-container {
  overflow: hidden;
  position: relative;

  .hero-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .hero-content {
    display: flex;
    justify-content: space-between;
    padding: 80px;

    .left {
      width: 38.2%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .slogon {
        font-size: 40px;
        color: #000;
        font-weight: 600;
        // text-shadow: 2px 2px 0px #f9f7f3;
        position: relative;
        display: inline-block;
        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 24px;
          background: rgba(250, 216, 73, 0.61);
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: -1;
          border-top-left-radius: 16%;
          border-top-right-radius: 12%;
          border-bottom-left-radius: 12%;
          border-bottom-right-radius: 16%;
        }
      }

      .description {
        font-size: 24px;
        font-weight: 300;
      }

      .btn-container {
        padding: 32px 0;

        .live-btn {
          margin-bottom: 8px;
        }
      }

      >>> .live-btn-primary {
        background: #434343;
        transition: all 0.382s;

        &:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
          transform: translateY(-4px);
        }
      }

      .star {
        padding: 24px 0;
        display: flex;
        align-items: center;
        font-weight: bold;
      }
    }

    .right {
      width: 61.8%;
      display: flex;
      align-items: center;
      justify-content: center;

      .app-img {
        width: 100%;
      }
    }
  }
}

.section-title {
  text-align: center;
  border-bottom: none;
}

.container-wrapper {
  background: #f9f7f3;
  padding: 32px;

  &.white {
    background: #fff;
  }
}

.container {
  max-width: 1200px;
  margin: 48px auto;

  .item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .item {
      width: 25%;
      padding: 16px;
      margin: 16px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      background: #fff;
      border-bottom-left-radius: 25px 115px;
      border-bottom-right-radius: 155px 25px;
      border-top-left-radius: 15px 225px;
      border-top-right-radius: 25px 150px;

      .title {
        font-size: 18px;
        padding-bottom: 16px;
        font-weight: bold;
        color: #000;
      }

      .desc {
        line-height: 1.5;
      }
    }
  }
}

.theme-img {
  display: block;
  width: 100%;
  max-width: 800px;
  margin: 32px auto;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.content-container {
  text-align: center;
  padding: 32px;
  line-height: 1.5;
}

.home-content {
  padding: 32px;
}

footer {
  padding: 48px 0;
  position: relative;
  overflow: hidden;
  text-align: center;
  background: #f9f7f3;
}

@media (max-width: 800px) {
  .hero-container {
    .hero-content {
      flex-direction: column;
      padding: 48px 32px;

      .star {
        flex-direction: column-reverse;

        .star-tip {
          padding-bottom: 16px;
        }
      }

      .left, .right {
        width: 100%;
        text-align: center;
      }

      .left {
        .slogon {
          font-size: 28px;
        }

        .description {
          font-size: 18px;
        }

        .live-btn-primary {
          margin-bottom: 8px;
        }
      }
    }
  }

  .container {
    margin: 32px auto;

    .item-container {
      .item {
        width: 100%;
        margin: 16px 0;
      }
    }
  }
}

.content-container {
  padding: 16px 0 32px;
}

.user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0 24px;
  .user-item {
    padding: 8px 16px;
    text-align: center;
    width: 180px;
    flex-shrink: 0;
    .avatar {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      display: inline-block;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)!important;
      transition: all 0.35s cubic-bezier(0.5, 0, 0.5, 1);
      background: #fff;
      &:hover {
        box-shadow: 0 25px 50px -12px rgba(0,0,0,.25)!important;
      }
    }
    .username {
      font-size: 16px;
      padding: 16px 0;
      font-weight: lighter;
    }
  }
}

.subscribe-form {
  max-width: 320px;
  margin: 0 auto;
}
.subscribe-label {
  font-size: 18px;
  font-weight: bold;
}
.subscribe-input {
  margin: 16px 0;
}
.subscribe-button {
  background: #434343;
  transition: all .382s;
}

.alert-content {
  text-align: center;
  font-size: 16px;
}
</style>
