import React, {Component, PropTypes} from 'react';

class TextInput extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        error: PropTypes.string,
        autoFocus: PropTypes.bool
    };

    constructor(props) {
        super(props);
    }
    
    render() {

        let wrapperClass = 'form-group';
        if(this.props.error) {
            wrapperClass += ' has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type="text"
                            name={this.props.name}
                            className="slimsteQuizConfiguratie"
                            placeholder={this.props.error || this.props.placeholder}
                            ref={this.props.name}
                            onChange={this.props.onChange}
                            value={this.props.value}
                            autoFocus={this.props.autoFocus ? "autoFocus" : false} 
                            />
                </div>
            </div>
            );
    }
}

export default TextInput;

