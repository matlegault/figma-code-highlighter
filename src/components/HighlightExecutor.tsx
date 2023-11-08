import * as React from 'react'
import { SchemaAndLanguage } from '../models/SchemaAndLanguage'
import colorSchemaList from '../consts/colorSchemaList'
import languageList from '../consts/languageList'
import Select from './Select'

interface Props {
  schemaAndLanguage: SchemaAndLanguage
  setColorSchema: (event) => void
  setLanguage: (event) => void
}

const runHighlight = (schemaAndLanguage: SchemaAndLanguage) => {
  parent.postMessage(
    { pluginMessage: { type: 'CHANGE_COLOR', schemaAndLanguage } },
    '*'
  )
}

const HighlightExecutor: React.FC<Props> = ({
  schemaAndLanguage,
  setColorSchema,
  setLanguage,
}: Props) => {
  return (
    <div className="box">
      <div className="flex">
        <div className="flexChild">
          <div className="section-title">Theme</div>
          <Select
            current={schemaAndLanguage.colorSchema}
            collection={colorSchemaList}
            onChange={event => {
              setColorSchema(event)
            }}
          />
        </div>
        <div className="flexChild">
          <div className="section-title">Language</div>
          <Select
            current={schemaAndLanguage.language}
            collection={languageList}
            onChange={event => {
              setLanguage(event)
            }}
          />
        </div>
      </div>
      <button
        className="button button--secondary buttonFullWidth cursor"
        onClick={() => {
          runHighlight(schemaAndLanguage)
        }}
      >
        Run
      </button>
    </div>
  )
}

export default HighlightExecutor
