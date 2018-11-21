/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class Git extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Git</h1>
            </header>
            <ul>
              <li>Source code for creating new Rails apps: <a href="https://gitlab.com/rubyonracetracks/rails_neutrino_5/">https://gitlab.com/rubyonracetracks/rails_neutrino_5/</a></li>
              <li>This site's source code: <a href="https://bitbucket.org/rubyonracetracks/rails-neutrino-docu/">https://bitbucket.org/rubyonracetracks/rails-neutrino-docu/</a></li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Git;
