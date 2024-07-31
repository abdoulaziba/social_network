package utils

import (
	"crypto/rsa"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"reflect"
	"social-network/lib/jwt"
)

// The function `RespondWithJSON` writes JSON data to an HTTP response with the specified status code.
func ResponseWithJSON(w http.ResponseWriter, data any, statusCode int) {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	json.NewEncoder(w).Encode(data)
}

// The function `DecodeJSONRequestBody` decodes the JSON request body into a specified model and
// returns the decoded data along with an HTTP status code and any potential errors.
func DecodeJSONRequestBody(r *http.Request, model interface{}) (interface{}, int, error) {
	decodedData := reflect.New(reflect.TypeOf(model)).Interface()
	data, err := io.ReadAll(r.Body)
	if err != nil {
		return nil, http.StatusInternalServerError, err
	}

	if err = json.Unmarshal(data, decodedData); err != nil {
		return nil, http.StatusBadRequest, err
	}
	return decodedData, http.StatusOK, nil
}

func GetPublicKey() *rsa.PublicKey {
	key := jwt.Key{}
	if err := key.KeyfromPublicFile("../../utils/key/public_key.pem"); err != nil {
		log.Fatal(err.Error())
	}
	return key.Public
}
