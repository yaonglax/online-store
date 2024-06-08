class errors extends Error{
    constructor(status, message) {
        super();
        this.message = message;
        this.status = status;
    }

    static badRequest(message) {
        return new errors(404, message)
    }
    static internal(message) {
        return new errors(500, message)
    }
}
module.exports = errors