const path = require('path')
const express = require('express')
const multer = require('multer')
const Ajv = require('ajv')

const upDir = path.join(__dirname, '../public/uploads')
const upload = multer({ dest: upDir })

const router = express.Router()

router.get('/', (req, res) => {
   res.render('index')
})

const arrInfo = []

router.post('/infoSend', upload.none(), (req, res) => {
   const ajv = new Ajv()
   const schema = {
      type: 'object',
      properties: {
         nickname: { type: 'string' },
         surname: {
            type: 'string',
            // pattern: '^[0-9]{2,21}$'
         },
      },
      additionalProperties: false,
      required: ['nickname', 'surname'],
   };
   const validate = ajv.compile(schema)
   const valid = validate(upload)
   if (!valid) {
      res.json({ status: 'validate error', error: validate.errors })
      console.log('ERROR VALIDATE!!!')
   }
   if (valid) {
      arrInfo.push(upload)
      console.log(arrInfo)
      res.json(arrInfo)
      console.log('CONFIRMED')
   }
   res.json({ status: 'ok' })
})

module.exports = router