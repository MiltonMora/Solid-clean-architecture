/* eslint-disable @typescript-eslint/no-unused-vars */
(() => {
    const temperaturesInCelsius = [33.6, 12.34];

    const servidorIp = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const usersEmails = users.map( user=> user.email );

    const isJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    const startTime = new Date().getTime();
    const endTime = new Date().getTime() - startTime;

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksFromUrl( _url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( _side: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    
})();


