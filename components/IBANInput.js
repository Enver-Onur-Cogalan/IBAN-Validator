import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const IBANInput = () => {
    const [iban, setIban] = useState('');
    const [error, setError] = useState('');

    const handleChange = (text) => {
        const raw = text.replace(/\s/g, '').toUpperCase();
        if (!raw.startsWith('TR')) setError('IBAN TR ile başlamalı');
        else if (raw.length > 26) setError('IBAN çok uzun (en fazla 26 karakter)');
        else if (!/^[A-Z0-9]+$/.test(raw)) setError('Sadece harf ve rakam girilmeli');
        else if (raw.length < 26) setError('Eksik IBAN numarası');
        else setError('');

        const formatted = raw.match(/.{1,4}/g)?.join(' ') ?? '';
        setIban(formatted);
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={iban}
                onChangeText={handleChange}
                placeholder='TRXX XXXX XXXX XXXX XXXX XXXX XX'
                keyboardType='default'
                style={[styles.input, error ? styles.inputError : null]}
                maxLength={32} // TR + 24 character + 6 space
                autoCapitalize='characters'
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        fontSize: 16,
        borderRadius: 8,
        letterSpacing: 1.5,
    },
    inputError: {
        borderColor: 'red',
    },
    error: {
        color: 'red',
        marginTop: 8,
    },
});

export default IBANInput;
