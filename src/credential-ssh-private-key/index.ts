// https://www.terraform.io/docs/providers/boundary/r/credential_ssh_private_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialSshPrivateKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the credential store this credential belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_ssh_private_key#credential_store_id CredentialSshPrivateKey#credential_store_id}
  */
  readonly credentialStoreId: string;
  /**
  * The description of the credential.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_ssh_private_key#description CredentialSshPrivateKey#description}
  */
  readonly description?: string;
  /**
  * The name of the credential. Defaults to the resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_ssh_private_key#name CredentialSshPrivateKey#name}
  */
  readonly name?: string;
  /**
  * The private key associated with the credential.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_ssh_private_key#private_key CredentialSshPrivateKey#private_key}
  */
  readonly privateKey: string;
  /**
  * The passphrase of the private key associated with the credential.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_ssh_private_key#private_key_passphrase CredentialSshPrivateKey#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * The username associated with the credential.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_ssh_private_key#username CredentialSshPrivateKey#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/boundary/r/credential_ssh_private_key boundary_credential_ssh_private_key}
*/
export class CredentialSshPrivateKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_credential_ssh_private_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/boundary/r/credential_ssh_private_key boundary_credential_ssh_private_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialSshPrivateKeyConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialSshPrivateKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_credential_ssh_private_key',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.3',
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
    this._credentialStoreId = config.credentialStoreId;
    this._description = config.description;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._privateKeyPassphrase = config.privateKeyPassphrase;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_store_id - computed: false, optional: false, required: true
  private _credentialStoreId?: string; 
  public get credentialStoreId() {
    return this.getStringAttribute('credential_store_id');
  }
  public set credentialStoreId(value: string) {
    this._credentialStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialStoreIdInput() {
    return this._credentialStoreId;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_hmac - computed: true, optional: false, required: false
  public get privateKeyHmac() {
    return this.getStringAttribute('private_key_hmac');
  }

  // private_key_passphrase - computed: false, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }

  // private_key_passphrase_hmac - computed: true, optional: false, required: false
  public get privateKeyPassphraseHmac() {
    return this.getStringAttribute('private_key_passphrase_hmac');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_store_id: cdktf.stringToTerraform(this._credentialStoreId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_passphrase: cdktf.stringToTerraform(this._privateKeyPassphrase),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
