/**
 * Receives a array with mongoose errors and return the first.
 */
export function getErrorMessage(errors = [], defaultMessage = "Ocorreu um erro.") {
    for (let error in errors) {
        return errors[error].message ?? defaultMessage;
    }
}