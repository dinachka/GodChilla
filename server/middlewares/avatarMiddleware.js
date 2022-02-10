const multer = require('multer');

const storage = multer.diskStorage({
  // куда сохранять фотки
  destination(req, file, cb) {
    cb(null, 'images/userAvatars');
  },
  // с каким именем запишется файл
  filename(req, file, cb) {
    const dateTime = new Date().getTime();
    cb(null, `${dateTime}-${file.originalname}`);
  },
});

//TODO dateTime монжо заменить на id user для перезаписи старых аватаор

const types = ['image/png', 'image/jpeg', 'image/jpg'];

// фильтрует по типу файлов
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
    // null - the place where error
  }
};

module.exports = multer({ storage, fileFilter });
