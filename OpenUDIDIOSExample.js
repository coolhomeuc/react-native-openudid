/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

//var OpenUDIDIOS = require('react-native').NativeModules.OpenUDID;
var OpenUDIDIOS = require('NativeModules').OpenUDID;
exports.framework = 'React';
exports.title = 'OpenUDID';
exports.description = 'Example of using the OpenUDID API.';

exports.examples = [
  {
    title: 'OpenUDID IOS',
    render: function(): ReactElement {
      return <OpenUDIDIOSExample />;
    },
  }
];

var OpenUDIDIOSExample = React.createClass({
  getInitialState: function() {
    return {
      openUDID: 'No OpenUDID yet',
    };
  },

  componentDidMount: function() {
    OpenUDIDIOS.getOpenUDID(
      this._onOpenUDIDSuccess,
      this._onOpenUDIDFailure
    );
  },

  _onOpenUDIDSuccess: function(openUDID) {
    this.setState({
      'openUDID': openUDID,
    });
  },

  _onOpenUDIDFailure: function(e) {
    this.setState({
      'openUDID': 'Error!',
    });
  },

  render: function() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>OpenUDID: </Text>
          {JSON.stringify(this.state.openUDID)}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
