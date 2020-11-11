<?php

    $result = array();

    function getAllThings($conn)
    {
        $query = "SELECT * FROM myfavthings";

        $runQuery = $conn->query($query);

        while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo(json_encode($result));
    }

    function getSingleThing($conn, $ID)
    {
        $query = "SELECT * FROM myfavthings WHERE ID=" . $ID . "";

        $runQuery = $conn->query($query);

        while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo(json_encode($result));
    }
