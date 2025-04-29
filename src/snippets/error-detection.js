try {
    throw "Oops; this is not an Error object";
} catch (e) {
    if (!Error.isError(e)) {
        e = new Error(e);
    }

    console.error(e.message);
}
