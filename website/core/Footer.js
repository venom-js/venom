/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Venom交流群</h5>
            <div>
              <p className="color-white ft-12">钉钉交流群</p>
              <img
                style={{ width: 100 }}
                src={this.props.config.dingdingImage}
              />
              <p className="color-white ft-12">微信交流群</p>
              <img style={{ width: 100 }} src={this.props.config.wechatImage} />
              <p className="color-white ft-12">
                无法加入请联系管理员：18757166601
              </p>
            </div>
          </div>
          <div>
            <h5>社区</h5>
            <a href={this.pageUrl("users.html", this.props.language)}>知乎</a>
            <a
              href="https://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener"
            >
              掘金
            </a>
            <a href="https://discordapp.com/">语雀</a>
            <a
              href="https://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
            <a href="https://github.com/">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
          <div>
            <h5>更多</h5>
            <a href={`${this.props.config.baseUrl}blog`}>博客</a>

            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${
                    this.props.config.twitterUsername
                  }`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource"
        />
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
