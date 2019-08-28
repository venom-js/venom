/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );
    const VenomJs = () => {
      return (
        <div className="productShowcaseSection mgb-50">
          <p className="title">create-venom</p>
          <p className="discripe">专注于可视化配置的企业级脚手架</p>
          <div className="buttons">
            <div>
              <Button href="docs/doc1_introduce">开始探索</Button>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <a
                className="github-button"
                href={this.props.config.venomUrl}
                data-icon="octicon-star"
                data-count-href="/facebook/docusaurus/stargazers"
                data-show-count="true"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star this project on GitHub"
              >
                Star
              </a>
            </div>
          </div>
        </div>
      );
    };

    const Racc = () => {
      return (
        <div className="productShowcaseSection mgb-50">
          <p className="title">racc</p>
          <p className="discripe">让组件编写更具效率化</p>
          <div className="buttons">
            <div>
              <Button href="/racc">开始使用</Button>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <a
                className="github-button"
                href={this.props.config.raccUrl}
                data-icon="octicon-star"
                data-count-href="/facebook/docusaurus/stargazers"
                data-show-count="true"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star this project on GitHub"
              >
                Star
              </a>
            </div>
          </div>
        </div>
      );
    };

    const Blocks = () => {
      return (
        <div className="productShowcaseSection mgb-50">
          <p className="title">venom-block</p>
          <p className="discripe">各种场景区块，一键生成</p>
          <div className="buttons">
            <div>
              <Button href="">开始使用</Button>
            </div>
          </div>
        </div>
      );
    };
    const Vscode = () => {
      return (
        <div className="productShowcaseSection mgb-50">
          <p className="title">venom-snippets</p>
          <p className="discripe">vscode编辑器代码块插件</p>
          <div className="buttons">
            <div>
              <Button href="">开始使用</Button>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        {/* <HomeSplash siteConfig={siteConfig} language={language} /> */}
        <div className="mainContainer">
          <VenomJs />
          <Racc />
          <Blocks />
          <Vscode />
        </div>
      </div>
    );
  }
}

module.exports = Index;
