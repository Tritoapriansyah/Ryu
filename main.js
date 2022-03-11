const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
  } = require('@adiwajshing/baileys'),
  fs = require('fs'),
  fetch = require('node-fetch'),
  moment = require('moment-timezone'),
  {
    wait,
    banner,
    getBuffer,
    h2k,
    generateMessageID,
    getGroupAdmins,
    getRandom,
    start,
    info,
    success,
    close,
  } = require('./lib/functions'),
  { color } = require('./lib/color'),
  _welkom = JSON.parse(fs.readFileSync('./database/welcome.json')),
  { uploadImages } = require('./lib/uploadimage'),
  { OwnerNumber, BotName, OwnerName } = require('./setting.json'),
  { welkam, goodbye } = require('./lib/welkam.js'),
  sleep = async (_0x2ffa46) => {
    return new Promise((_0x327a3e) => setTimeout(_0x327a3e, _0x2ffa46))
  }
thumb = fs.readFileSync('./media/thumb.jpg')
require('./Ryuu.js')
nocache('./Ryuu.js', (_0x251cc3) =>
  console.log(_0x251cc3 + ' telah di update!')
)
const starts = async (_0x487184 = new WAConnection()) => {
  _0x487184.logger.level = 'warn'
  _0x487184.version = [2, 2143, 3]
  _0x487184.browserDescription = ['Lolita Bot', 'Safari', '3.0']
  _0x487184.on('qr', () => {
    console.log(
      color('[', 'white'),
      color('!', 'red'),
      color(']', 'white'),
      color(' Scan Qrnya Kak Waktu Cuma 20 Detik !!')
    )
  })
  const _0x120899 = async (
    _0x500bb9,
    _0xb64f24,
    _0x5f02fc,
    _0x105f79,
    _0x2e9349
  ) => {
    gam = _0x105f79
    jadinya = await _0x487184.prepareMessage(_0x500bb9, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: _0xb64f24,
      footerText: _0x5f02fc,
      buttons: _0x2e9349,
      headerType: 4,
    }
    _0x487184.sendMessage(
      _0x500bb9,
      buttonMessagesI,
      MessageType.buttonsMessage
    )
  }
  fs.existsSync('./QrRyuu.json') && _0x487184.loadAuthInfo('./QrRyuu.json')
  _0x487184.on('connecting', () => {
    start('2', 'Menghubungkan ...')
  })
  _0x487184.on('open', () => {
    success('2', 'Bot Sudah Terhububung, Selamat Memakai Bot')
    _0x487184.sendMessage(
      OwnerNumber + '@s.whatsapp.net',
      '*Halo Owner ' +
        BotName +
        ' \uD83D\uDC4B*\n\nBot Sekarang Sudah Tersambung Dan Siap Untuk Dipakai \uD83E\uDD19\uD83D\uDE09\n\nJika Terjadi Emror Hubungi Developer\n',
      MessageType.text,
      {
        contextInfo: {
          forwardingScore: 508,
          isForwarded: true,
          externalAdReply: {
            title: 'Developer Bot',
            body: '',
            previewType: 'PHOTO',
            thumbnail: fs.readFileSync('./media/thumb.jpg'),
            sourceUrl: 'https://wa.me/6285888258313?text=Assalamualaikum',
          },
        },
      }
    )
  })
  await _0x487184.connect({ timeoutMs: 30000 })
  fs.writeFileSync(
    './QrRyuu.json',
    JSON.stringify(_0x487184.base64EncodedAuthInfo(), null, '\t')
  )
  teks = 'https://chat.whatsapp.com/'
  _0x487184.query({
    json: [
      'action',
      'invite',
      '' + teks.replace('https://chat.whatsapp.com/', ''),
    ],
  })
  console.log(
    color('[ WARN ]', 'yellow'),
    color('BOT MEMASUKI GROUP ', 'yellow')
  )
  _0x487184.on('chat-update', async (_0x2eab3e) => {
    require('./Ryuu.js')(_0x487184, _0x2eab3e, _welkom)
  })
  _0x487184.on('group-participants-update', async (_0x4e8ea2) => {
    const _0x9f7138 = _welkom.includes(_0x4e8ea2.jid)
    try {
      groupMet = await _0x487184.groupMetadata(_0x4e8ea2.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = _0x4e8ea2.participants[0]
      console.log(_0x4e8ea2)
      try {
        pp_user = await _0x487184.getProfilePicture(mem)
      } catch (_0x5351e1) {
        pp_user =
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
      }
      try {
        pp_grup = await _0x487184.getProfilePicture(_0x4e8ea2.jid)
      } catch (_0x1bee18) {
        pp_grup =
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
      }
      _0x4e8ea2.action == 'add' &&
        mem.includes(_0x487184.user.jid) &&
        _0x487184.sendMessage(
          _0x4e8ea2.jid,
          '```Haloo Semua \uD83D\uDC4B Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik .menu```',
          'conversation'
        )
      let _0x37b7cf = await getBuffer(pp_user),
        _0xba1e27 = await uploadImages(_0x37b7cf),
        _0x48845b = await getBuffer(pp_grup),
        _0x2daa36 = await uploadImages(_0x48845b)
      if (!_0x9f7138) {
        return
      }
      if (_0x4e8ea2.action == 'add') {
        num = _0x4e8ea2.participants[0]
        mdata = await _0x487184.groupMetadata(_0x4e8ea2.jid)
        memeg = mdata.participants.length
        let _0x41f5ae = _0x487184.contacts[num] || {
          notify: num.replace(/@.+/, ''),
        }
        anu_user = _0x41f5ae.vname || _0x41f5ae.notify || num.split('@')[0]
        time_wel = moment.tz('Asia/Jakarta').format('HH:mm')
        try {
          ppimg = await _0x487184.getProfilePicture(
            _0x4e8ea2.participants[0].split('@')[0] + '@c.us'
          )
        } catch {
          ppimg =
            'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }
        image = await getBuffer(
          'https://ryuu-apii.herokuapp.com/api/creator/Welcome3?username=' +
            anu_user +
            '&memberCount=' +
            memeg +
            '&gcname=' +
            encodeURIComponent(mdata.subject) +
            '&bg=https://telegra.ph/file/bf8079fc05fcc8b51cf32.jpg&pp=' +
            _0xba1e27 +
            '&gcicon=' +
            _0x2daa36 +
            '&apikey=RyuBotz'
        )
        teks =
          '\uD835\uDDDB\uD835\uDDEE\uD835\uDDF9\uD835\uDDFC \uD835\uDDDE\uD835\uDDEE\uD835\uDDF8 *@' +
          num.split('@')[0] +
          '*\n\uD835\uDDE6\uD835\uDDF2\uD835\uDDF9\uD835\uDDEE\uD835\uDDFA\uD835\uDDEE\uD835\uDE01 \uD835\uDDD7\uD835\uDDEE\uD835\uDE01\uD835\uDDEE\uD835\uDDFB\uD835\uDDF4 \uD835\uDDD7\uD835\uDDF6 \uD835\uDDDA\uD835\uDDFF\uD835\uDDFC\uD835\uDE02\uD835\uDDFD ' +
          mdata.subject +
          '\n\n'
        but = [
          {
            buttonId: '.welcomedekkk',
            buttonText: { displayText: 'WELCOME \uD83D\uDC4B' },
            type: 1,
          },
        ]
        let _0x4f028e = await getBuffer(ppimg)
        _0x120899(
          mdata.id,
          teks + welkam(),
          '*\xA9 Whatsapp | ' + mdata.subject + '*',
          image,
          but
        )
      } else {
        if (_0x4e8ea2.action == 'remove') {
          num = _0x4e8ea2.participants[0]
          mdata = await _0x487184.groupMetadata(_0x4e8ea2.jid)
          memeg = mdata.participants.length
          let _0x563886 = _0x487184.contacts[num] || {
            notify: num.replace(/@.+/, ''),
          }
          anu_user = _0x563886.vname || _0x563886.notify || num.split('@')[0]
          time_wel = moment.tz('Asia/Jakarta').format('HH:mm')
          try {
            ppimg = await _0x487184.getProfilePicture(
              num.split('@')[0] + '@c.us'
            )
          } catch {
            ppimg =
              'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
          }
          imagee = await getBuffer(
            'https://ryuu-apii.herokuapp.com/api/creator/goodbye3?username=' +
              anu_user +
              '&memberCount=' +
              memeg +
              '&gcname=' +
              encodeURIComponent(mdata.subject) +
              '&bg=https://telegra.ph/file/bf8079fc05fcc8b51cf32.jpg&pp=' +
              _0xba1e27 +
              '&gcicon=' +
              _0x2daa36 +
              '&apikey=RyuBotz'
          )
          tekss =
            '\uD835\uDDEC\uD835\uDDEE\uD835\uDDF5\uD835\uDDF5 \uD835\uDDE6\uD835\uDDF6 *@' +
            num.split('@')[0] +
            '* \uD835\uDDDE\uD835\uDDF2\uD835\uDDF9\uD835\uDE02\uD835\uDDEE\uD835\uDDFF\n\n'
          butt = [
            {
              buttonId: '.remove',
              buttonText: { displayText: 'GOODBYE \uD83D\uDC4B' },
              type: 1,
            },
          ]
          let _0x412af4 = await getBuffer(ppimg)
          _0x120899(
            mdata.id,
            tekss + goodbye(),
            '*\xA9 Whatsapp | ' + mdata.subject + '*',
            imagee,
            butt
          )
        }
      }
    } catch (_0x18b7c0) {
      console.log('Error : %s', color(_0x18b7c0, 'red'))
    }
  })
}
function nocache(_0x504dba, _0x5ba963 = () => {}) {
  console.log(
    'Module',
    "'" + _0x504dba + "'",
    'sekarang sedang diawasi untuk perubahan'
  )
  fs.watchFile(require.resolve(_0x504dba), async () => {
    await uncache(require.resolve(_0x504dba))
    _0x5ba963(_0x504dba)
  })
}
function uncache(_0x1aa8d5 = '.') {
  return new Promise((_0x515f48, _0x6ad714) => {
    try {
      delete require.cache[require.resolve(_0x1aa8d5)]
      _0x515f48()
    } catch (_0x57886d) {
      _0x6ad714(_0x57886d)
    }
  })
}
starts()
