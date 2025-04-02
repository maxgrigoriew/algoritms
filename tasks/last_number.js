const lastNumber = (str) => {
    let temp = '';
    let nextNum = false;
    const regexp = /\d/;

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(regexp)) {
            if (nextNum) {
                temp+= str[i];
            } else {
                temp = str[i];
            }
        }

        if (str[i + 1]?.match(regexp)) {
            nextNum = true;
        }
    }
    return temp;
};

console.log(lastNumber('t4 dfsdf312fddfdsf'));
var testClient = params.getTest();
if (!user.hasRight(Right.CLIENT_TEST))
    testClient = false;

if (params.getTest() != null) {
    query.addSqlQuery("""
    and tc.test = :test
    """)
        .setParameter("test", testClient, StandardBasicTypes.BOOLEAN);
}

var testClient = params.getTest();
if (!user.hasRight(Right.CLIENT_TEST))
    testClient = false;

if (params.getTest() != null) {
    query.addSqlQuery("""
    and tc.test = :test
    """)
        .setParameter("test", testClient, StandardBasicTypes.BOOLEAN);
}