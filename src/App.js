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
  <p>
    Macron is a cutting edge framework for building next generation desktop apps with simple technologies like HTML5.
    There is absolutely no limit to what you can build with Macron. Think of a music app built with VueJS
    and ES6/7, a banking app built with TypeScript, Angular 2 for logic and layout and C++ for backend, your favorite todo app with jQuery, a sophisticated
    ReactJS calculator that uses Python with <b>NumPy</b> and <b>matplotlib</b>, the list remains endless.
  </p>
  <p>
    To make things more sophisticated, native C/C++ or Python modules, libraries and/or packages could be used
    to access parts of the machine which would otherwise be difficult with web-based JavaScript alone. These modules
    can be directly integrated with HTML5.
  </p>
  <p>To get started, use the searchbar above to find demos of what you needed most.</p>

  <p><a href="javascript:void(0)">Terms & conditions</a> <a href="javascript:void(0)">About</a> <a href="javascript:void(0)">GitHub source</a></p>
`

function copyActionHandler(target, content){
  var input = document.createElement('input')

  document.body.appendChild(input)
  input.value = content
  input.select()
  document.execCommand('copy', false)
  input.remove()

  // "Copied!" message
  target.parentElement.innerHTML += "<span id='copy-notify' style='color: green;vertical-align:-webkit-baseline-middle;float: right;margin:7px 10px 0 0;'>Copied!</span>"

  setTimeout(() => {
    document.getElementById('copy-notify').remove()
  }, 500)

  // return content
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

    this.editor.getCodeMirror().setValue(selectedOption.code.default)
    eval(selectedOption.code.default)
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
          <section id="preview" style={{lineHeight: 2, width: '50%', display: 'inline-block', height: '100%', textAlign: 'center'}}/>

          <div id="editor">
            <div id="control-bar">
              <span style={{textTransform: "uppercase", fontWeight: "bold", color: '#777', verticalAlign: '-webkit-baseline-middle', fontSize: 14, display: 'inline-block'}}>Live Editor</span>
              <button id="run" onClick={() => eval(this.editor.getCodeMirror().getValue())}>Run</button>
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
