import { Component } from 'react';

class Others extends Component {
  render() {
    const { imputCheckbox, imputFile, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Outros</legend>
        <div>
          <label>
            Segundo imput tipo checkbox:
            <input
              type="checkbox"
              name='imputCheckbox'
              imputCheckbox={imputCheckbox}
              onChange={handleChange} />
          </label>
        </div>
        <label>
          Terceiro imput tipo file:
          <input
            type="file"
            name='imputFile'
            imputFile={imputFile}
            onChange={handleChange} />
        </label>
      </fieldset>
    )
  }
}

export default Others;