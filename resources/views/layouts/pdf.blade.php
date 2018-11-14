<html xml:lang="en" xmlns="http://www.w3.org/1999/xhtml" lang="en">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">

        <title>Header and Footer example</title>
        <style type="text/css">

            @page {
                margin: 2cm;
            }

            body {
                font-family: sans-serif;
                margin: 0.5cm 0;
                text-align: justify;
            }

            p {
                font-size: 0.8em;
                margin: 2px;
            }

            #header,
            #footer {
                position: fixed;
                left: 0;
                right: 0;
                color: #aaa;
                font-size: 0.9em;
            }

            #header {
                top: 0;
                border-bottom: 0.1pt solid #aaa;
            }

            #footer {
                bottom: 0;
                border-top: 0.1pt solid #aaa;
            }

            #header table,
            #footer table {
                width: 100%;
                border-collapse: collapse;
                border: none;
            }

            #header td,
            #footer td {
                padding: 0;
                width: 50%;
            }

            .page-number {
                text-align: center;
            }

            .page-number:before {
                content: "Page " counter(page);
            }

            hr {
                page-break-after: always;
                border: 0;
            }

        </style>

    </head>

    <body marginwidth="0" marginheight="0">
        <div id="header">
            <table>
                <tbody>
                    <tr>
                        <td>
                            {{ $heading }}
                        </td>

                        <td style="text-align: right;">
                            {{ $date }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        {{--<div id="footer">--}}
            {{--<div class="page-number"></div>--}}
        {{--</div>--}}

        <h2>{{ $title }}</h2>

        @yield('content')
    </body>
</html>