import React, { Component } from 'react'
import Select from 'react-select'
import CodeMirror from 'react-codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/darcula.css'

const options = [
  { value: 'activate', label: 'activate' },
  { value: 'clone', label: 'clone' },
  { value: 'close', label: 'close' },
  { value: 'focus', label: 'focus' },
  { value: 'focusOnStartup', label: 'focusOnStartup' },
  { value: 'frameless', label: 'frameless' },
  { value: 'height', label: 'height' },
  { value: 'hide', label: 'hide' },
  { value: 'hideInTaskbar', label: 'hideInTaskbar' },
  { value: 'hideOnStartup', label: 'hideOnStartup' },
  { value: 'isActive', label: 'isActive' },
  { value: 'isFocused', label: 'isFocused' },
  { value: 'isKeyboardFocused', label: 'isKeyboardFocused' },
  { value: 'isVisible', label: 'isVisible' },
  { value: 'maxHeight', label: 'maxHeight' },
  { value: 'maxWidth', label: 'maxWidth' },
  { value: 'minHeight', label: 'minHeight' },
  { value: 'minWidth', label: 'minWidth' },
  { value: 'resizable', label: 'resizable' },
  { value: 'show', label: 'show' },
  { value: 'startupFromCenter', label: 'startupFromCenter' },
  { value: 'state', label: 'state' },
  { value: 'title', label: 'title' },
  { value: 'width', label: 'width' }
]

class App extends Component {
  state = {
    selectedOption: null,
    sampleCode: '// type your code...'
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
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
        <header style={{margin: '20px 0 0'}} id="header">
          <span style={{borderRadius: 50, width: 48, height: 48, backgroundColor: '#777', position: 'relative', display: 'inline-block', marginRight: 25}}></span>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            className='select-nav'
            placeholder='How to...'
            styles={{
              control: styles => ({
                ...styles,
                borderRadius: 50,
                minHeight: 48,
                fontSize: 18,
                paddingLeft: 10,
                paddingRight: 10
              })
            }}
            theme={(theme) => ({
              borderRadius: 0,
              colors: {
                text: 'orangered',
                primary25: 'hotpink',
                primary: 'black',
              },
            })}
          />
          <span style={{borderRadius: 50, width: 48, height: 48, backgroundColor: '#777', position: 'relative', display: 'inline-block', marginLeft: 25}}></span>
        </header>
        
        <div style={{height: 700, marginTop: 60}}>
          <section id="preview" style={{minWidth: '50%', display: 'inline-block', height: '100%'}}>
            <button>Button</button>
          </section>
          {/* <textarea id="code" ></textarea> */}
          <CodeMirror
            mode='javascript'
            value={this.state.code}
            onChange={this.updateCode.bind(this)}
            defaultValue={`const options = [
  { value: 'activate', label: 'activate' },
  { value: 'clone', label: 'clone' },
  { value: 'close', label: 'close' },
  { value: 'focus', label: 'focus' },
  { value: 'focusOnStartup', label: 'focusOnStartup' },
  { value: 'frameless', label: 'frameless' },
  { value: 'height', label: 'height' },
  { value: 'hide', label: 'hide' },
  { value: 'hideInTaskbar', label: 'hideInTaskbar' },
  { value: 'hideOnStartup', label: 'hideOnStartup' },
  { value: 'isActive', label: 'isActive' },
  { value: 'isFocused', label: 'isFocused' },
  { value: 'isKeyboardFocused', label: 'isKeyboardFocused' },
  { value: 'isVisible', label: 'isVisible' },
  { value: 'maxHeight', label: 'maxHeight' },
  { value: 'maxWidth', label: 'maxWidth' },
  { value: 'minHeight', label: 'minHeight' },
  { value: 'minWidth', label: 'minWidth' },
  { value: 'resizable', label: 'resizable' },
  { value: 'show', label: 'show' },
  { value: 'startupFromCenter', label: 'startupFromCenter' },
  { value: 'state', label: 'state' },
  { value: 'title', label: 'title' },
  { value: 'width', label: 'width' }
]`}
            options={{
              // scrollbarStyle: 'null',
              theme: 'darcula'
            }}
          />
        </div>
      </main>
    );
  }
}

export default App;
