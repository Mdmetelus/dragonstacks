#!/bin/bash

export PGPASSWORD='node_password'

echo "Configureing dragonstackdb"


dropdb -U node_user dragenstackdb
createdb -U node_user dragenstackdb



psql -U node_user dragenstackdb < ./ bin/sql/generations.sql
psql -U node_user dragenstackdb < ./ bin/sql/dragon.sql

echo "dragonstackdb was configured"