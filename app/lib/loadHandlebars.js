export const loadHandlebars = (receivedData) => {
    const template = document.getElementById("template").innerHTML;
    const compiled_template = Handlebars.compile(template);
    const rendered = compiled_template({data: receivedData});
    document.getElementById("target").innerHTML = rendered;
}