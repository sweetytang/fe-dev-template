const DEV_TEXT = "development";

const PRO_TEXT = "production";

const NODE_ENV = process.env.NODE_ENV;

const isDev = NODE_ENV === PRO_TEXT;

const CWD_PATH = process.cwd();

module.exports = {
  DEV_TEXT,
  PRO_TEXT,
  isDev,
  NODE_ENV,
  CWD_PATH,
};
