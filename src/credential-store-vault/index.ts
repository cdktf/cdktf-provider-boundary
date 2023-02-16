// https://www.terraform.io/docs/providers/boundary/r/credential_store_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialStoreVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#address CredentialStoreVault#address}
  */
  readonly address: string;
  /**
  * A PEM-encoded CA certificate to verify the Vault server's TLS certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#ca_cert CredentialStoreVault#ca_cert}
  */
  readonly caCert?: string;
  /**
  * A PEM-encoded client certificate to use for TLS authentication to the Vault server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#client_certificate CredentialStoreVault#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * A PEM-encoded private key matching the client certificate from 'client_certificate'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#client_certificate_key CredentialStoreVault#client_certificate_key}
  */
  readonly clientCertificateKey?: string;
  /**
  * The Vault credential store description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#description CredentialStoreVault#description}
  */
  readonly description?: string;
  /**
  * The Vault credential store name. Defaults to the resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#name CredentialStoreVault#name}
  */
  readonly name?: string;
  /**
  * The namespace within Vault to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#namespace CredentialStoreVault#namespace}
  */
  readonly namespace?: string;
  /**
  * The scope for this credential store.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#scope_id CredentialStoreVault#scope_id}
  */
  readonly scopeId: string;
  /**
  * Name to use as the SNI host when connecting to Vault via TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#tls_server_name CredentialStoreVault#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Whether or not to skip TLS verification.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#tls_skip_verify CredentialStoreVault#tls_skip_verify}
  */
  readonly tlsSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * A token used for accessing Vault.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault#token CredentialStoreVault#token}
  */
  readonly token: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault boundary_credential_store_vault}
*/
export class CredentialStoreVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_credential_store_vault";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/boundary/r/credential_store_vault boundary_credential_store_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialStoreVaultConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialStoreVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_credential_store_vault',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.4',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._caCert = config.caCert;
    this._clientCertificate = config.clientCertificate;
    this._clientCertificateKey = config.clientCertificateKey;
    this._description = config.description;
    this._name = config.name;
    this._namespace = config.namespace;
    this._scopeId = config.scopeId;
    this._tlsServerName = config.tlsServerName;
    this._tlsSkipVerify = config.tlsSkipVerify;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_certificate_key - computed: false, optional: true, required: false
  private _clientCertificateKey?: string; 
  public get clientCertificateKey() {
    return this.getStringAttribute('client_certificate_key');
  }
  public set clientCertificateKey(value: string) {
    this._clientCertificateKey = value;
  }
  public resetClientCertificateKey() {
    this._clientCertificateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateKeyInput() {
    return this._clientCertificateKey;
  }

  // client_certificate_key_hmac - computed: true, optional: false, required: false
  public get clientCertificateKeyHmac() {
    return this.getStringAttribute('client_certificate_key_hmac');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // tls_skip_verify - computed: false, optional: true, required: false
  private _tlsSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsSkipVerify() {
    return this.getBooleanAttribute('tls_skip_verify');
  }
  public set tlsSkipVerify(value: boolean | cdktf.IResolvable) {
    this._tlsSkipVerify = value;
  }
  public resetTlsSkipVerify() {
    this._tlsSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSkipVerifyInput() {
    return this._tlsSkipVerify;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_hmac - computed: true, optional: false, required: false
  public get tokenHmac() {
    return this.getStringAttribute('token_hmac');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      client_certificate_key: cdktf.stringToTerraform(this._clientCertificateKey),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      tls_server_name: cdktf.stringToTerraform(this._tlsServerName),
      tls_skip_verify: cdktf.booleanToTerraform(this._tlsSkipVerify),
      token: cdktf.stringToTerraform(this._token),
    };
  }
}
