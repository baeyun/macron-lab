import React, { Component } from 'react'
import Select from 'react-select'
import CodeMirror, { getCodeMirror } from 'react-codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/ambiance.css'
import mappedOptions from './mappedOptions'
import logosrc from './logo'

const macron = window.macron || {}
const defaultPreviewContent = /*html*/`
  <img src="${logosrc}" alt="Macron Logo">

  <h2>Welcome to MacronLab</h2>

  <p>Start searching with the searchbar above to get started.</p>

  <p><a href="javascript:void(0)">Terms & conditions</a> <a href="javascript:void(0)">About</a> <a href="javascript:void(0)">GitHub source</a></p>
`

function copyActionHandler(target, that){
  var input = document.createElement('input')

  document.body.appendChild(input)
  input.value = that
  input.select()
  document.execCommand('copy', false)
  input.remove()

  // "Copied!" message
  target.parentElement.innerHTML += "<span id='copy-notify' style='color: green;vertical-align:-webkit-baseline-middle;float: right;margin:7px 10px 0 0;'>Copied!</span>"

  setTimeout(() => {
    document.getElementById('copy-notify').remove()
  }, 500)

  // return that
}

class App extends Component {
  state = {
    selectedOption: {},
    sampleCode: `/**
 * MacronLab
 * 
 * Made with 🧡 by:
 * 		@bukharim96
 * 		@undefinedbuddy
 */
`
  }

  componentDidMount() {
    const previewElement = document.getElementById('preview')

    previewElement.innerHTML = defaultPreviewContent
  }

  handleChange = (selectedOption) => {
    const previewElement = document.getElementById('preview')

    this.setState({ selectedOption })
    this.setState({ sampleCode: selectedOption.code.default || this.state.sampleCode })

    previewElement.innerHTML = selectedOption.content.default || defaultPreviewContent

    // TODO: Evaluate editor script
    this.editor.getCodeMirror().setValue(selectedOption.code.default)
  }

  updateCode(newCode) {
		this.setState({
			sampleCode: newCode,
		})
	}

  render() {
    const { selectedOption } = this.state
    
    return (
      <main style={{margin: '0 auto', maxWidth: 1200, padding: '0 20px'}}>
        <header style={{textAlign: 'center', margin: '20px 0 0'}} id="header">
          <img id="logo" src={logosrc} style={{borderRadius: 50, width: 48, height: 48, position: 'relative', display: 'inline-block', marginRight: 25}}></img>
          <Select
            onChange={this.handleChange}
            options={mappedOptions}
            className='select-nav'
            placeholder='How to...'
            styles={{
              control: styles => ({
                ...styles,
                borderRadius: 50,
                minHeight: 48,
                fontSize: 18,
                paddingLeft: 10,
                paddingRight: 10,
                zIndex: 1000
              })
            }}
          />
        </header>
        
        <div style={{height: 500, marginTop: 60, maxWidth: '100%'}}>
          <section id="preview" style={{width: '50%', display: 'inline-block', height: '100%', textAlign: 'center'}}/>

          <div id="editor">
            <div id="control-bar">
              <span style={{textTransform: "uppercase", fontWeight: "bold", color: '#777', verticalAlign: '-webkit-baseline-middle', fontSize: 14, display: 'inline-block'}}>Live Editor</span>
              <button id="run">Run</button>
              <button id="copy" onClick={(e) => copyActionHandler(e.target, this.editor.getCodeMirror().getValue())}>Copy</button>
            </div>

            <CodeMirror
              mode='javascript'
              value={this.state.sampleCode}
              onChange={this.updateCode.bind(this)}
              defaultValue={this.state.sampleCode}
              ref={(c) => this.editor = c}
              options={{
                theme: 'ambiance',
                autofocus: true
              }}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
