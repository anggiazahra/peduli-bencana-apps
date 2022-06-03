<<<<<<< Updated upstream
/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
=======
>>>>>>> Stashed changes
const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
<<<<<<< Updated upstream
    const urlsSplits = url.split("/");
=======
    const urlsSplits = url.split('/');
>>>>>>> Stashed changes
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
<<<<<<< Updated upstream
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : "/") +
      (splitedUrl.id ? "/:id" : "") +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : "")
    );
=======
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
        + (splitedUrl.id ? '/:id' : '')
        + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
>>>>>>> Stashed changes
  },
};

export default UrlParser;
