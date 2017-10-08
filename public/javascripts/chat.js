var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {
    $scope.messages = [
    {

        'sender':'USER' ,
        'text':'hi',
        'time':'10:01 AM'

    },
    {

            'sender':'BOT',
            'text':'What can I do for you?',
            'time':'10:01 AM'

    },
    {

                'sender':'USER',
                'text':'News about Modi',
                'time':'10:01 AM'
    },
     {

                    'sender':'BOT',
                    'text':'INVALID',
                    'time':'10:01 AM'
        },
         {

                        'sender':'USER',
                        'text':'News about Rahul Gandhi',
                        'time':'10:01 AM'
            }

    ]


});
